import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Menus = () => {
    return (
        <Card>
            <p>Menus</p>
        </Card>
    )
}

Menus.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, ['common'])),
        },
    }
}

export default Menus
