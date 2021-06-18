import NavLink from '@common/NavLink'
import { useTranslation } from 'next-i18next'

const HeaderNavigation = () => {
    const { t } = useTranslation('admin-common')

    return (
        <div className="sticky top-0 z-10 bg-primary">
            <nav className="container py-3 mx-auto px-md" role="navigation">
                <ul className="flex flex-row space-x-sm">
                    <NavLink title={t('header.home')} href="/admin/dashboard" />
                    <NavLink title={t('header.news')} href="/admin/news" />
                    <NavLink title={t('header.events')} href="/admin/events" />
                    <NavLink title={t('header.menus')} href="/admin/menus" />
                    <NavLink title={t('header.locations')} href="/admin/locations" />
                    <NavLink title={t('header.activity')} href="/admin/activity" />
                    <NavLink title={t('header.nation')} href="/admin/nation" />
                    <NavLink title={t('header.users')} href="/admin/users" />
                </ul>
            </nav>
        </div>
    )
}

export default HeaderNavigation
