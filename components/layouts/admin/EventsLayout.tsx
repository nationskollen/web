import React from 'react'
import { TemplateGetter } from '@typings'
import { useTranslation } from 'next-i18next'

import SubNavLink from '@common/SubNavLink'
import HeaderTitle from '@common/HeaderTitle'
import Subnavigation from '@common/Subnavigation'
import MainLayout from '@layouts/admin/MainLayout'

export interface Props {
    children?: React.ReactNode
}

const Template = ({ children }: Props) => {
    const { t } = useTranslation('admin-events')

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle title={t('page.title')} description={t('page.description')} />
            </MainLayout.Header>
            <Subnavigation basePath="/admin/events">
                <SubNavLink title={t('upcoming.title')} href="/" />
                <SubNavLink title={t('old.title')} href="/old" />
            </Subnavigation>
            <MainLayout.Content>{children}</MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

const getTemplate: TemplateGetter = (page: React.ReactNode) =>
    MainLayout.getTemplate(<Template>{page}</Template>)

export default {
    Template,
    getTemplate,
}
