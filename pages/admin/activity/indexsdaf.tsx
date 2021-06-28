import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeaderTitle from '@common/HeaderTitle'
import MainLayout from '@layouts/admin/MainLayout'

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
