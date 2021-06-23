import React from 'react'
import { useTranslation } from 'next-i18next'
import { UserIcon } from '@heroicons/react/outline'

import { TemplateGetter } from '@typings'

import Image from '@common/Image'
import BackArrow from '@common/BackArrow'
import SubNavLink from '@common/SubNavLink'
import HeaderTitle from '@common/HeaderTitle'
import Subnavigation from '@common/Subnavigation'
import MainLayout from '@layouts/admin/MainLayout'

export interface Props {
    children: React.ReactNode
}

const Template = ({ children }: Props) => {
    const { t } = useTranslation('admin-users')

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle
                    title="Fredrik Engstrand"
                    description={t('me.description')}
                    backHref="/admin/users"
                    leftComponent={
                        <Image src={null} size="huge" fallbackIcon={UserIcon} />
                    }
                />
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

const getTemplate: TemplateGetter = (page) => (
    MainLayout.getTemplate(
        <Template>{page}</Template>
    )
)

export default {
    Template,
    getTemplate,
}
