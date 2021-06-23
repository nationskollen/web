import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { LOCALES } from '@constants'
import UserLayout from '@layouts/admin/UserLayout'

const UserPermissionsPage = () => {
    return <p>Permissions</p>
}

UserPermissionsPage.getTemplate = UserLayout.getTemplate

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

export default UserPermissionsPage
