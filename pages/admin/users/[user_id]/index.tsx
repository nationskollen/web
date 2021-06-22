import { LOCALES } from '@constants'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { GetStaticProps, GetStaticPaths } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import MainLayout from '@layouts/admin/Main'
import SingleUserPage from '@pages/admin/users/SingleUserPage'

const UserPage = () => {
    const { query } = useRouter()

    return (
        <SingleUserPage>
            <p>User id: {query.user_id}</p>
        </SingleUserPage>
    )
}

UserPage.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

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

export default UserPage
