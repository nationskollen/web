import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import HeaderTitle from '@common/HeaderTitle'
import MainLayout from '@layouts/admin/MainLayout'
import CreateEventForm from '@forms/CreateEventForm'

const CreateEventPage = () => {
    const { t } = useTranslation(['admin-common', 'admin-events'])

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle title={t('admin-events:create.title')} backHref="/admin/events" />
            </MainLayout.Header>
            <MainLayout.Content>
                <CreateEventForm />
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

CreateEventPage.getTemplate = MainLayout.getTemplate

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
                'admin-events',
            ])),
        },
    }
}

export default CreateEventPage
