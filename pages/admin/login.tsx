import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'
import { AUTH, VERSION, CONTACT_EMAIL } from '@constants'
import { MailIcon, ArrowLeftIcon } from '@heroicons/react/outline'

import Logo from '@svg/Logo'
import Card from '@common/Card'
import Title from '@common/Title'
import Button from '@common/Button'
import LoginForm from '@forms/Login'
import LoginLayout from '@layouts/admin/Login'

const Login = () => {
    useEffect(() => {
        const token = localStorage.getItem(AUTH.TOKEN_STORAGE_KEY)

        if (token) {
            Router.push('/admin/dashboard')
        }
    }, [])

    return (
        <>
            <Card containerClassName="space-y-md">
                <div className="self-center text-primary-text">
                    <Logo />
                </div>
                <Title text="Login" />
                <LoginForm />
            </Card>
            <section className="flex justify-center w-full mt-md">
                <Link href="/" passHref={true}>
                    <Button style="transparent" className="text-white">
                        <ArrowLeftIcon />
                        <span>Tillbaka till startsidan</span>
                    </Button>
                </Link>
            </section>
            <section className="absolute bottom-0 flex flex-col items-center w-full text-white">
                <Button style="primary" className="mb-lg" href={`mailto://${CONTACT_EMAIL}`}>
                    <MailIcon className="h-6" />
                    <span className="font-bold">{CONTACT_EMAIL}</span>
                </Button>
                <p className="font-bold">{VERSION}</p>
                <p className="text-sm text-primary-text-light">Team Krabby</p>
            </section>
        </>
    )
}

Login.getTemplate = (page: React.ReactElement) => (
    <LoginLayout.Template>{page}</LoginLayout.Template>
)

export default Login
