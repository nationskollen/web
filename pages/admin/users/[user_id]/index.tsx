import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { LOCALES } from '@constants'
import UserLayout from '@layouts/admin/User'

const UserPage = () => {
    const { query } = useRouter()

    return (
        <p>User id: {query.user_id}</p>
    )
}

UserPage.getTemplate = UserLayout.getTemplate

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
