import { useState, useRef } from 'react'
import { Row } from 'react-table'

import { getShorterDate } from '@utils'
import { useAuth } from '@contexts/Auth'
import { useEvents } from '@nationskollen/sdk'
import { SearchIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import CardTitle from '@common/CardTitle'
import Table, { ActionsRendererProps } from '@common/Table'
import AdminSection from '@components/admin/AdminSection'

export interface TableItem {
    name: string
    occurs_at: string
    ends_at: string
}


const ActionItems = ({ row }: ActionsRendererProps<TableItem>) => {
    return (
        <p>{row.id}</p>
    )
}

const UpcomingEvents = () => {
    const { oid } = useAuth()
    const [page, setPage] = useState(1)
    const after = useRef(new Date()).current
    const [filterString, setFilterString] = useState('')
    const { data, error, isValidating, pagination } = useEvents(oid, { page })

    return (
        <AdminSection id="upcoming">
            <CardTitle
                title="Kommande evenemang"
                description="Översikt av nationens kommande evenemang"
            >
                <Input
                    id="upcoming_filter"
                    type="text"
                    placeholder="Filtrera"
                    onChange={(e) => setFilterString(e.target.value)}
                    debounce={true}
                >
                    <SearchIcon />
                </Input>
            </CardTitle>
            <Table
                columns={[
                    {
                        Header: 'Event',
                        accessor: 'name',
                    },
                    {
                        Header: 'Start',
                        accessor: 'occurs_at',
                    },
                    {
                        Header: 'Slut',
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
            />
        </AdminSection>
    )
}

export default UpcomingEvents
