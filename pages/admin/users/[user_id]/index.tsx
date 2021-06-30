import { LOCALES } from '@constants'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import ProfileForm from '@forms/ProfileForm'
import UserLayout from '@layouts/admin/UserLayout'

const UserPage = () => {
    return (
        <ProfileForm />
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
