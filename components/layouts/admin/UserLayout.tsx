import React from 'react'
import { TemplateGetter } from '@typings'
import { useTranslation } from 'next-i18next'
import { BadgeCheckIcon } from '@heroicons/react/solid'

import Tag from '@common/Tag'
import SubNavLink from '@common/SubNavLink'
import HeaderTitle from '@common/HeaderTitle'
import Subnavigation from '@common/Subnavigation'
import MainLayout from '@layouts/admin/MainLayout'

export interface Props {
    children: React.ReactNode
}

const Template = ({ children }: Props) => {
    const { t } = useTranslation(['admin-users', 'common'])

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle
                    title="Fredrik Engstrand"
                    tags={
                        <Tag
                            label={t('common:auth.role.admin')}
                            style="success"
                            icon={BadgeCheckIcon}
                        />
                    }
                    backHref="/admin/users"
                />
            </MainLayout.Header>
            <Subnavigation basePath="/admin/users" queryKey="user_id">
                <SubNavLink title={t('admin-users:navigation.information')} href="/" />
                <SubNavLink title={t('admin-users:navigation.permissions')} href="/permissions" />
            </Subnavigation>
            <MainLayout.Content>{children}</MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

const getTemplate: TemplateGetter = (page) => MainLayout.getTemplate(<Template>{page}</Template>)

export default {
    Template,
    getTemplate,
}
