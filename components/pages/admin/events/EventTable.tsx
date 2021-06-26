import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { getShorterDate } from '@utils'
import { useAuth } from '@contexts/Auth'
import { useEvents } from '@nationskollen/sdk'
import { SearchIcon, PencilAltIcon, TrashIcon, PlusIcon } from '@heroicons/react/outline'

import Button from '@common/Button'
import Input from '@common/Input'
import MenuItem from '@common/MenuItem'
import Table, { ActionsRendererProps } from '@common/Table'

export interface Props {
    id: string
    after?: Date
    before?: Date
    amount?: number
}

export interface TableItem {
    name: string
    occurs_at: string
    ends_at: string
}

const ActionItems = ({ row }: ActionsRendererProps<TableItem>) => {
    return (
        <>
            <MenuItem icon={PencilAltIcon} label="Ändra" onClick={() => console.log('asd')} />
            <MenuItem icon={TrashIcon} label="Ta bort" onClick={() => console.log('asdasd')} />
        </>
    )
}

const EventTable = ({ id, before, after, amount = 15 }: Props) => {
    const { oid } = useAuth()
    const [page, setPage] = useState(1)
    const [filterString, setFilterString] = useState('')
    const { t } = useTranslation(['admin-events', 'common'])
    const { data, error, isValidating, pagination } = useEvents(oid, {
        page,
        amount,
        before,
        after,
    })

    return (
        <>
            <div className="flex flex-row w-full space-x-md">
                <Input
                    id={`${id}_filter`}
                    type="text"
                    placeholder={t('common:filtering.placeholder')}
                    onChange={(e) => setFilterString(e.target.value)}
                    debounce={true}
                    className="flex-1"
                >
                    <SearchIcon />
                </Input>
                <Link href="/admin/events/create" passHref={true}>
                    <Button
                        style="primary"
                        className="px-sm"
                    >
                        <span>{t('admin-events:create.title')}</span>
                        <PlusIcon />
                    </Button>
                </Link>
            </div>
            <Table
                columns={[
                    {
                        Header: t('admin-events:upcoming.column.name'),
                        accessor: 'name',
                    },
                    {
                        Header: t('admin-events:upcoming.column.start'),
                        accessor: 'occurs_at',
                    },
                    {
                        Header: t('admin-events:upcoming.column.end'),
                        accessor: 'ends_at',
                    },
                    {
                        Header: '',
                        accessor: 'actions',
                        disableSortBy: true,
                    },
                ]}
                data={
                    data &&
                    data.map(({ name, occurs_at, ends_at }) => ({
                        name,
                        occurs_at: getShorterDate(occurs_at),
                        ends_at: getShorterDate(ends_at),
                        actions: ActionItems,
                    }))
                }
                hasActions={true}
                useActionsDropdown={true}
                loading={isValidating}
                pagination={pagination}
                showPagination={true}
                filterString={filterString}
                setPage={setPage}
                error={!!error}
            />
        </>
    )
}

export default EventTable
