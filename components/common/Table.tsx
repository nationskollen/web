import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { Transition } from '@headlessui/react'
import { useEffect, useState, useMemo } from 'react'
import { Row, Column, useSortBy, useGlobalFilter, usePagination, useTable } from 'react-table'
import { SortDescendingIcon, SortAscendingIcon, DotsVerticalIcon } from '@heroicons/react/outline'

import { PaginationMeta } from '@nationskollen/sdk'

import MenuDropdown from '@common/MenuDropdown'
import LoadingIndicator from '@common/LoadingIndicator'
import PaginationActions from '@common/PaginationActions'

export type TableData<T> = Array<Record<keyof T, unknown>>
export type TableColumns<T> = Array<Column<Record<keyof T, unknown>>>

export interface ActionsRendererProps<T> {
    row: Row<TableData<T>>
}

export interface Props<T> {
    columns: TableColumns<T>
    data?: TableData<T>
    loading?: boolean
    hasActions?: boolean
    useActionsDropdown?: boolean
    showIndex?: boolean
    showPagination?: boolean
    pagination?: PaginationMeta
    setPage?: (page: number) => void
    error?: boolean
    errorMessage?: string
    filterString?: string
}

export interface OverlayProps {
    transparent?: boolean
    children: React.ReactNode
}

export interface SortIndicatorProps {
    descending?: boolean
}

export interface ActionsPopoverProps {
    children: React.ReactNode
}

export interface FooterProps<T> {
    totalRows?: number
    data?: TableData<T>
    pagination?: PaginationMeta
    page: number
    setPage?: (page: number) => void
    showPagination?: boolean
}

const Overlay = ({ transparent, children }: OverlayProps) => {
    return (
        <div
            className={clsx(
                'absolute bottom-0 flex rounded-sm z-10',
                'w-full h-full border-background-highlight border-b-1'
            )}
        >
            <div
                className={clsx(
                    'flex-1 rounded-b-sm',
                    'bg-background dark:bg-background-extra mt-table-row',
                    'flex justify-center items-center box-content',
                    transparent && 'opacity-70'
                )}
            >
                {children}
            </div>
        </div>
    )
}

const SortIndicator = ({ descending }: SortIndicatorProps) => {
    return (
        <div className={clsx('absolute right-sm top-0 h-full flex flex-row items-center p-3')}>
            {descending ? <SortDescendingIcon /> : <SortAscendingIcon />}
        </div>
    )
}

const ActionsMenu = ({ children }: ActionsPopoverProps) => {
    return (
        <MenuDropdown
            cardClassName="w-actions-popover"
            size="icon"
            style="transparent"
            button={() => <DotsVerticalIcon />}
        >
            {children}
        </MenuDropdown>
    )
}

const Footer = <T,>({
    totalRows,
    pagination,
    data,
    page,
    setPage,
    showPagination,
}: FooterProps<T>) => {
    const { t } = useTranslation('common')
    const rowStart = pagination ? pagination.per_page * (page - 1) : 0
    const rowEnd = rowStart + (totalRows || 0)
    const rowTotal = pagination?.total || data?.length || 0

    return (
        <div className="flex flex-row items-center justify-between mt-sm">
            <p className="flex flex-row w-full text-sm text-text ml-xsm">
                {t('pagination.rows', {
                    current: rowEnd === 0 ? 0 : `${rowStart + 1}-${rowEnd}`,
                    total: rowTotal,
                })}
            </p>
            {showPagination && setPage && (
                <PaginationActions page={page} pagination={pagination} setPage={setPage} />
            )}
        </div>
    )
}

const Table = <T,>({
    columns,
    data,
    loading,
    hasActions,
    useActionsDropdown,
    showIndex,
    showPagination,
    pagination,
    setPage,
    error,
    errorMessage,
    filterString,
}: Props<T>) => {
    const { t } = useTranslation('common')
    const [cachedData, setCachedData] = useState<TableData<T>>([])
    const [cachedMeta, setCachedMeta] = useState<PaginationMeta | undefined>(undefined)

    // To prevent re-render flickering when fetching new data,
    // we make sure to cache the previous data and only update it
    // if it has indeed changed.
    useEffect(() => {
        if (loading || !data) {
            return
        }

        setCachedData(data)
    }, [loading, data, pagination])

    // The pagination data will also update each time we update the
    // selected page. This also causes re-render flickering and therefore
    // we cache this data as well.
    //
    // To support dynamically changing the pagination parameters,
    // we must listen for changes in total pages and items per page.
    // If any of these parameters change, we must recalculate the active page.
    useEffect(() => {
        if (loading || !showPagination || !pagination) {
            return
        }

        if (cachedMeta && setPage) {
            if (
                (pagination.last_page !== cachedMeta.last_page ||
                    pagination.per_page !== cachedMeta.per_page) &&
                cachedMeta.current_page !== 1
            ) {
                setPage(Math.floor(pagination.total / pagination.per_page))
            }
        }

        setCachedMeta(pagination)
    }, [pagination])

    const memoizedColumns = useMemo(() => columns, [columns])
    const memoizedData = useMemo(() => cachedData, [cachedData])
    const memoizedPagination = useMemo(() => cachedMeta, [cachedMeta])

    const tableInstance = useTable(
        {
            columns: memoizedColumns,
            data: memoizedData,
            initialState: {
                pageSize: memoizedPagination?.per_page || 15,
                pageIndex: memoizedPagination?.current_page || 1,
                globalFilter: filterString,
            },
            pageCount: memoizedPagination?.last_page || 1,
            manualPagination: true,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } =
        tableInstance

    return (
        <>
            <div
                className={clsx(
                    'relative w-full overflow-hidden border-b-0',
                    'rounded-sm mt-md border-1 border-background-highlight',
                    rows.length === 0 || loading ? 'min-h-table-empty' : 'min-h-table'
                )}
            >
                <Transition
                    as="div"
                    className="pointer-events-none"
                    show={!!loading}
                    enter="transition-opacity duration-in delay-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                >
                    <Overlay transparent={true}>
                        <LoadingIndicator size="small" />
                    </Overlay>
                </Transition>
                {rows.length === 0 && !loading && (
                    <Overlay>
                        <p className="text-md">
                            {error ? errorMessage || t('table.error') : t('table.empty')}
                        </p>
                    </Overlay>
                )}
                <table {...getTableProps()} className="w-full border-collapse table-auto">
                    <thead className="text-text-highlight bg-background dark:bg-background-extra">
                        {headerGroups.map((headerGroup) => (
                            <tr
                                className="border-b-1 border-background-highlight"
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column, index) => (
                                    <th
                                        className={clsx(
                                            'text-left h-table-row px-md text-md relative',
                                            'border-background-highlight',
                                            showIndex && index === 0 && 'w-sm',
                                            column.isNumber && 'text-right',
                                            hasActions && index + 1 === columns.length && 'w-12'
                                        )}
                                        {...column.getHeaderProps()}
                                        {...column.getSortByToggleProps()}
                                    >
                                        {column.render('Header')}
                                        {column.isSorted && (
                                            <SortIndicator descending={column.isSortedDesc} />
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)

                            return (
                                <tr
                                    className={clsx(
                                        'last:border-b-1 border-background-highlight',
                                        'hover:bg-lighter'
                                    )}
                                    {...row.getRowProps()}
                                >
                                    {row.cells.map((cell, cellIndex) => (
                                        <td
                                            className={clsx(
                                                'h-table-row px-md',
                                                'border-border text-md',
                                                columns[cellIndex].isNumber && 'text-right'
                                            )}
                                            {...cell.getCellProps()}
                                        >
                                            {hasActions && cellIndex + 1 === columns.length ? (
                                                <>
                                                    {useActionsDropdown ? (
                                                        <ActionsMenu>
                                                            {row.values.actions({ row })}
                                                        </ActionsMenu>
                                                    ) : (
                                                        <>{row.values.actions({ row })}</>
                                                    )}
                                                </>
                                            ) : (
                                                cell.render('Cell')
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Footer
                data={data}
                page={state.pageIndex}
                setPage={setPage}
                totalRows={rows.length}
                pagination={memoizedPagination}
                showPagination={showPagination}
            />
        </>
    )
}

export default Table
