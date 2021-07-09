import { useState } from 'react'
import { useTranslation } from 'next-i18next'

import { getShorterDate } from '@utils'
import { useAuth } from '@contexts/Auth'
import { useEvents } from '@nationskollen/sdk'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import Row from '@common/Row'
import Column from '@common/Column'
import MenuItem from '@common/MenuItem'
import FilterInput from '@common/FilterInput'
import CreateButton from '@common/CreateButton'
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
    const { user } = useAuth()
    const [page, setPage] = useState(1)
    const { t } = useTranslation('admin-events')
    const [filterString, setFilterString] = useState('')
    const { data, error, isValidating, pagination } = useEvents(user.oid, {
        page,
        amount,
        before,
        after,
    })

    return (
        <Column>
            <Row>
                <FilterInput id={id} onChange={setFilterString} />
                <CreateButton href="/admin/events/create" label={t('create.title')} />
            </Row>
            <Table
                columns={[
                    {
                        Header: t('upcoming.column.name'),
                        accessor: 'name',
                    },
                    {
                        Header: t('upcoming.column.start'),
                        accessor: 'occurs_at',
                    },
                    {
                        Header: t('upcoming.column.end'),
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
        </Column>
    )
}

export default EventTable
