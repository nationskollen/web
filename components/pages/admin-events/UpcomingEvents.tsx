import { useState, useRef } from 'react'
import { useTranslation } from 'next-i18next'

import { getShorterDate } from '@utils'
import { useAuth } from '@contexts/Auth'
import { useEvents } from '@nationskollen/sdk'
import { SearchIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import MenuItem from '@common/MenuItem'
import CardTitle from '@common/CardTitle'
import AdminSection from '@components/admin/AdminSection'
import Table, { ActionsRendererProps } from '@common/Table'

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

const UpcomingEvents = () => {
    const { oid } = useAuth()
    const { t } = useTranslation(['admin-events', 'common'])
    const [page, setPage] = useState(1)
    const after = useRef(new Date()).current
    const [filterString, setFilterString] = useState('')
    const { data, error, isValidating, pagination } = useEvents(oid, { page, after })

    return (
        <AdminSection id="upcoming">
            <CardTitle title={t('upcoming.title')} description={t('upcoming.description')}>
                <Input
                    id="upcoming_filter"
                    type="text"
                    placeholder={t('common:filtering.placeholder')}
                    onChange={(e) => setFilterString(e.target.value)}
                    debounce={true}
                >
                    <SearchIcon />
                </Input>
            </CardTitle>
            <Table
                columns={[
                    {
                        Header: t('upcoming.columns.name') as string,
                        accessor: 'name',
                    },
                    {
                        Header: t('upcoming.columns.start') as string,
                        accessor: 'occurs_at',
                    },
                    {
                        Header: t('upcoming.columns.end') as string,
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
        </AdminSection>
    )
}

export default UpcomingEvents
