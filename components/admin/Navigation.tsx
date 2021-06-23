import clsx from 'clsx'
import { useTranslation } from 'next-i18next'

import Logo from '@svg/Logo'
import NavLink from '@common/NavLink'
import Container from '@common/Container'
import UserPopover from '@components/admin/UserPopover'

const Navigation = () => {
    const { t } = useTranslation('admin-common')

    return (
        <div
            className={clsx(
                'bg-background-extra dark:bg-background w-full',
                'border-b-1 border-background-highlight dark:border-background-extra'
            )}
        >
            <Container
                as="nav"
                role="navigation"
                className="w-full flex flex-row justify-between items-center py-sm"
            >
                <Logo className="h-9 w-9 text-primary-extra filter dark:brightness-150 mr-md" />
                <ul className="flex-1 flex flex-row space-x-sm">
                    <NavLink title={t('header.home')} href="/admin/dashboard" />
                    <NavLink title={t('header.news')} href="/admin/news" />
                    <NavLink title={t('header.events')} href="/admin/events" />
                    <NavLink title={t('header.menus')} href="/admin/menus" />
                    <NavLink title={t('header.locations')} href="/admin/locations" />
                    <NavLink title={t('header.activity')} href="/admin/activity" />
                    <NavLink title={t('header.nation')} href="/admin/nation" />
                    <NavLink title={t('header.users')} href="/admin/users" />
                </ul>
                <UserPopover />
            </Container>
        </div>
    )
}

export default Navigation
