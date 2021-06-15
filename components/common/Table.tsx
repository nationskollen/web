import { useState, useMemo } from 'react'
import { combineNoCache } from '@utils'
import { PaginationMeta } from '@nationskollen/sdk'
import { Column, usePagination, useTable } from 'react-table'
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
    onDemand?: boolean
    onDemandTitle?: string
}

export interface OverlayProps {
    children: React.ReactNode
}

const Overlay = ({ children }: OverlayProps) => {
    return (
        <div className={combineNoCache(
            'absolute bottom-0 flex rounded-sm',
            'w-full h-full border-border even:bg-lighter',
        )}>
            <div className={combineNoCache(
                'flex-1 rounded-b-sm',
                'bg-background dark:bg-background-extra mt-table-row',
                'flex justify-center items-center box-content',
            )}>
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
}: Props<T>) => {
    const memoizedColumns = useMemo(() => columns, [])
    const memoizedData = useMemo(() => data, [data])

    const tableInstance = useTable({
        columns: memoizedColumns,
        data: memoizedData,
        initialState: {
            pageSize: pagination?.per_page || 15,
            pageIndex: pagination?.current_page || 1,
        },
        pageCount: pagination?.last_page || 1,
        manualPagination: true,
    }, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <>
            <div className="relative w-full overflow-hidden rounded-sm mt-md min-h-table border-1 border-border">
                <Transition
                    as="div"
                    className="pointer-events-none"
                    appear={true}
                    show={loading}
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
                                        className={combineNoCache(
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
                                    <tr {...row.getRowProps()} className="even:bg-lighter">
                                        {row.cells.map((cell) => (
                                            <td
                                                className={combineNoCache(
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
