import clsx from 'clsx'
import { useMemo } from 'react'
import { PaginationMeta } from '@nationskollen/sdk'
import { Column, useGlobalFilter, usePagination, useTable } from 'react-table'
import { Transition } from '@headlessui/react'

import LoadingIndicator from '@common/LoadingIndicator'
import PaginationActions from '@common/PaginationActions'

export interface Props<T> {
    columns: Array<Column<Record<keyof T, unknown>>>
    data: Array<Record<keyof T, unknown>>
    loading?: boolean
    showIndex?: boolean
    showPagination?: boolean
    pagination?: PaginationMeta
    setPage?: (page: number) => void
    filterString?: string
}

export interface OverlayProps {
    children: React.ReactNode
}

const Overlay = ({ children }: OverlayProps) => {
    return (
        <div
            className={clsx(
                'absolute bottom-0 flex rounded-sm',
                'w-full h-full border-border border-b-1 even:bg-lighter',
            )}
        >
            <div
                className={clsx(
                    'flex-1 rounded-b-sm',
                    'bg-background dark:bg-background-extra mt-table-row',
                    'flex justify-center items-center box-content',
                )}
            >
                {children}
            </div>
        </div>
    )
}

const Table = <T,>({
    columns,
    data,
    loading,
    showIndex,
    showPagination,
    pagination,
    setPage,
    filterString,
}: Props<T>) => {
    const memoizedColumns = useMemo(() => columns, [])
    const memoizedData = useMemo(() => data, [data])
    const memoizedPagination = useMemo(() => pagination, [pagination])

    const tableInstance = useTable({
        columns: memoizedColumns,
        data: memoizedData,
        initialState: {
            pageSize: memoizedPagination?.per_page || 15,
            pageIndex: memoizedPagination?.current_page || 1,
            globalFilter: filterString,
        },
        pageCount: memoizedPagination?.last_page || 1,
        manualPagination: true,
    }, useGlobalFilter, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <>
            <div
                className={clsx(
                    'relative w-full overflow-hidden border-b-0',
                    'rounded-sm mt-md min-h-table border-1 border-border',
                )}
            >
                <Transition
                    as="div"
                    className="pointer-events-none"
                    appear={true}
                    show={!!loading}
                    enter="transition-opacity duration-in delay-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <Overlay>
                        <LoadingIndicator size="medium" />
                    </Overlay>
                </Transition>
                {rows.length === 0 && !loading && (
                    <Overlay>
                        <p className="text-md">Inget innehåll</p>
                    </Overlay>
                )}
                <table {...getTableProps()} className="w-full border-collapse table-auto">
                    <thead className="text-white dark:bg-background bg-primary-extra dark:text-text-highlight">
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="border-b-1 border-border">
                                {headerGroup.headers.map((column, index) => (
                                    <th
                                        className={clsx(
                                            'text-left h-table-row px-md text-sm',
                                            'border-r-1 border-primary dark:border-background-extra last:border-r-0',
                                            showIndex && index === 0 ? 'w-sm' : '',
                                        )}
                                        {...column.getHeaderProps()}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                                prepareRow(row)

                                return (
                                    <tr {...row.getRowProps()} className="even:bg-lighter border-b-1 border-border">
                                        {row.cells.map((cell) => (
                                            <td
                                                className={clsx(
                                                    'h-table-row px-md border-r-1 last:border-r-0',
                                                    'border-border text-md',
                                                )}
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {showPagination && setPage && (
                <PaginationActions
                    pagination={pagination}
                    setPage={setPage}
                />
            )}
        </>
    )
}

export default Table
