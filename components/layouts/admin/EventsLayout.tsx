import React from 'react'
import { useTranslation } from 'next-i18next'
import { PlusIcon } from '@heroicons/react/solid'

import { TemplateGetter } from '@typings'

import Button from '@common/Button'
import HeaderTitle from '@common/HeaderTitle'
import SubNavLink from '@common/SubNavLink'
import MainLayout from '@layouts/admin/Main'
import Subnavigation from '@common/Subnavigation'

export interface Props {
    children?: React.ReactNode
}

const Template = ({ children }: Props) => {
    const { t } = useTranslation('admin-events')

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle title={t('page.title')} description={t('page.description')}>
                    <Button
                        style="primary"
                        radius="large"
                        className="px-sm"
                        onClick={() => console.log('hello')}
                    >
                        <span>{t('create.title')}</span>
                        <PlusIcon />
                    </Button>
                </HeaderTitle>
            </MainLayout.Header>
            <Subnavigation basePath="/admin/events">
                <SubNavLink title={t('upcoming.title')} href="/" />
                <SubNavLink title={t('old.title')} href="/old" />
            </Subnavigation>
            <MainLayout.Content>{children}</MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

const getTemplate: TemplateGetter = (page: React.ReactNode) => (
    MainLayout.getTemplate(
        <Template>{page}</Template>
    )
)

export default {
    Template,
    getTemplate,
}
