import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { PlusIcon } from '@heroicons/react/outline'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Button from '@common/Button'
import MainLayout from '@layouts/admin/Main'
import HeaderTitle from '@common/HeaderTitle'

const Menus = () => {
    const { t } = useTranslation('admin-menus')

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
                <p>Menus</p>
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Menus.getTemplate = MainLayout.getTemplate

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
                'admin-menus',
            ])),
        },
    }
}

export default Menus
