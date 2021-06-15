import { SearchIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import CardTitle from '@common/CardTitle'
import AdminSection from '@components/admin/AdminSection'

const OldEvents = () => {
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
                >
                    <SearchIcon />
                </Input>
            </CardTitle>
        </AdminSection>
    )
}

export default OldEvents
