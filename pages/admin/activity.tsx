import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Activity = () => {
    return (
        <Card>
            <p>Activity</p>
        </Card>
    )
}

Activity.getTemplate = (page: React.ReactElement) => (
    <MainLayout.Template>{page}</MainLayout.Template>
)

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
            ])),
        },
    }
}

export default Activity
