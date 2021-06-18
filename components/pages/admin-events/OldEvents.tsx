import { useTranslation } from 'next-i18next'
import { SearchIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import CardTitle from '@common/CardTitle'
import AdminSection from '@components/admin/AdminSection'

const OldEvents = () => {
    const { t } = useTranslation(['admin-events', 'common'])

    return (
        <AdminSection id="old">
            <CardTitle title={t('old.title')} description={t('old.description')}>
                <Input id="old_filter" type="text" placeholder={t('common:filtering.placeholder')}>
                    <SearchIcon />
                </Input>
            </CardTitle>
        </AdminSection>
    )
}

export default OldEvents
