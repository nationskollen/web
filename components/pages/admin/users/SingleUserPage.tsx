import React from 'react'
import { useTranslation } from 'next-i18next'
import { UserIcon } from '@heroicons/react/outline'

import Avatar from '@common/Avatar'
import SubNavLink from '@common/SubNavLink'
import MainLayout from '@layouts/admin/Main'
import HeaderTitle from '@common/HeaderTitle'
import Subnavigation from '@common/Subnavigation'

export interface Props {
    children: React.ReactNode
}

const SingleUserPage = ({ children }: Props) => {
    const { t } = useTranslation('admin-users')

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <div className="flex flex-row space-x-lg">
                    <Avatar src={null} size="large" fallbackIcon={UserIcon} />
                    <HeaderTitle title="Fredrik Engstrand" description={t('me.description')} />
                </div>
            </MainLayout.Header>
            <Subnavigation basePath="/admin/users" queryKey="user_id">
                <SubNavLink title={t('navigation.information')} href="/" />
                <SubNavLink title={t('navigation.permissions')} href="/permissions" />
            </Subnavigation>
            <MainLayout.Content>
                {children}
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

export default SingleUserPage
