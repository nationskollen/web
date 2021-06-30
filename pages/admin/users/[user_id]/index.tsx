import { LOCALES } from '@constants'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { UserIcon } from '@heroicons/react/outline'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Row from '@common/Row'
import Form from '@common/Form'
import Title from '@common/Title'
import Image from '@common/Image'
import Input from '@common/Input'
import InputGroup from '@common/InputGroup'
import Column from '@common/Column'
import Sidebar from '@common/Sidebar'
import UserLayout from '@layouts/admin/UserLayout'

const UserPage = () => {
    const { query } = useRouter()
    const { t } = useTranslation(['admin-users', 'common'])

    return (
        <Form
            submit={(values) => console.log(values)}
            sidebarContent={(
                <Image src={null} size="huge" fallbackIcon={UserIcon} />
            )}
        >
            <Title
                size="medium"
                text={query.user_id === 'me' ? t('admin-users:me.title') : t('admin-users:profile.title')}
            />
            <InputGroup>
                <Input
                    type="text"
                    label={t('admin-users:profile.field.name.title')}
                    defaultValue="Fredrik Engstrand"
                />
                <Input
                    type="email"
                    label={t('common:auth.field.email.title')}
                    defaultValue="fredrik@engstrand.nu"
                />
            </InputGroup>
            <InputGroup>
                <Input
                    type="password"
                    label={t('common:auth.field.password.title')}
                    placeholder={t('common:auth.field.password.placeholder')}
                />
                <Input
                    type="password"
                    label={t('common:auth.field.repeat_password.title')}
                    placeholder={t('common:auth.field.repeat_password.placeholder')}
                />
            </InputGroup>
        </Form>
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
