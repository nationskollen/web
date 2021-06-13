import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'
import { AUTH, VERSION, CONTACT_EMAIL } from '@constants'
import { MailIcon, ArrowLeftIcon } from '@heroicons/react/outline'

import Logo from '@svg/Logo'
import Card from '@common/Card'
import Button from '@common/Button'
import LoginForm from '@forms/LoginForm'
import LoginLayout from '@layouts/admin/Login'

const Login = () => {
    useEffect(() => {
        const token = localStorage.getItem(AUTH.USER_STORAGE_KEY)

        if (token) {
            Router.push('/admin/dashboard')
        }
    }, [])

    return (
        <div className="text-text-highlight">
            <div className="fixed flex justify-center top-12 left-12">
                <Link href="/" passHref={true}>
                    <Button style="transparent">
                        <ArrowLeftIcon />
                        <span>Tillbaka till startsidan</span>
                    </Button>
                </Link>
            </div>
            <Card containerClassName="space-y-lg">
                <Logo containerClassNames="self-center text-primary filter dark:brightness-200" />
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

Login.getTemplate = (page: React.ReactElement) => (
    <LoginLayout.Template>{page}</LoginLayout.Template>
)

export default Login
