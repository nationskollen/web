import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Nation = () => {
    return (
        <Card>
            <p>Nation</p>
        </Card>
    )
}

Nation.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, ['common'])),
        },
    }
}

export default Nation
