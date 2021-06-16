import { SearchIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import CardTitle from '@common/CardTitle'
import AdminSection from '@components/admin/AdminSection'

const OldEvents = () => {
    return (
        <AdminSection id="old">
            <CardTitle title="Gamla evenemang" description="Översikt av nationens gamla evenemang">
                <Input id="old_filter" type="text" placeholder="Filtrera">
                    <SearchIcon />
                </Input>
            </CardTitle>
        </AdminSection>
    )
}

export default OldEvents
