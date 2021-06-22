import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { PlusIcon } from '@heroicons/react/outline'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Button from '@common/Button'
import MainLayout from '@layouts/admin/Main'
import HeaderTitle from '@common/HeaderTitle'

const Activity = () => {
    const { t } = useTranslation('admin-activity')

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle title={t('page.title')} description={t('page.description')} />
            </MainLayout.Header>
            <MainLayout.Content>
                <p>Activity</p>
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Activity.getTemplate = MainLayout.getTemplate

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
                'admin-activity',
            ])),
        },
    }
}

export default Activity
