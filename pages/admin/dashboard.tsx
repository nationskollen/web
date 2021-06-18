import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Dashboard = () => {
    return (
        <Card>
            <p>Dashboard</p>
        </Card>
    )
}

Dashboard.getTemplate = (page: React.ReactElement) => (
    <MainLayout.Template>{page}</MainLayout.Template>
)

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, ['common'])),
        },
    }
}

export default Dashboard
