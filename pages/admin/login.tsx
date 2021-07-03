import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { LOCALES, AUTH, VERSION, CONTACT_EMAIL } from '@constants'
import { MailIcon, ArrowLeftIcon } from '@heroicons/react/outline'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Logo from '@svg/Logo'
import Card from '@common/Card'
import Button from '@common/Button'
import LoginForm from '@forms/LoginForm'
import LoginLayout from '@layouts/admin/LoginLayout'

const Login = () => {
    const { t } = useTranslation('common')

    useEffect(() => {
        const token = localStorage.getItem(AUTH.TOKEN_STORAGE_KEY)

        if (token) {
            // The actual token will be validated by the `ProtectedRoute` component
            Router.push('/admin/dashboard')
        }
    }, [])

    return (
        <div className="text-text-highlight">
            <div className="fixed flex justify-center top-lg left-lg">
                <Link href="/" passHref={true}>
                    <Button style="transparent">
                        <ArrowLeftIcon />
                        <span>{t('action.back_to_homepage')}</span>
                    </Button>
                </Link>
            </div>
            <Card containerClassName="space-y-lg">
                <Logo className="self-center text-primary filter dark:brightness-200" />
                <LoginForm />
            </Card>
            <section className="absolute bottom-0 flex flex-col items-center w-full text-text">
                <Button
                    style="light"
                    className="mb-lg"
                    radius="large"
                    href={`mailto://${CONTACT_EMAIL}`}
                >
                    <MailIcon className="h-6" />
                    <span>{CONTACT_EMAIL}</span>
                </Button>
                <p className="font-bold">{VERSION}</p>
                <p className="text-sm text-primary-text">Team Krabby</p>
            </section>
        </div>
    )
}

Login.getTemplate = LoginLayout.getTemplate

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
            ])),
        },
    }
}

export default Login
