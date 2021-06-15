import { useState, useRef } from 'react'
import { getShorterDate } from '@utils'
import { useAuth } from '@contexts/Auth'
import { useEvents } from '@nationskollen/sdk'
import { SearchIcon } from '@heroicons/react/outline'

import Table from '@common/Table'
import Input from '@common/Input'
import CardTitle from '@common/CardTitle'
import AdminSection from '@components/admin/AdminSection'

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
                    }
                ]}
                data={data ?
                    data.map(({ name, occurs_at, ends_at }) => ({
                        name,
                        occurs_at: getShorterDate(occurs_at),
                        ends_at: getShorterDate(ends_at),
                    })) : []
                }
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