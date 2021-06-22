import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { PlusIcon } from '@heroicons/react/outline'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Button from '@common/Button'
import SubNavLink from '@common/SubNavLink'
import MainLayout from '@layouts/admin/Main'
import HeaderTitle from '@common/HeaderTitle'
import Subnavigation from '@common/Subnavigation'

const Users = () => {
    const { t } = useTranslation('admin-users')

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
            <MainLayout.Content>
                <p>asda</p>
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Users.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
                'admin-users',
            ])),
        },
    }
}

export default Users
