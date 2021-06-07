import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'
import { AUTH, VERSION, CONTACT_EMAIL } from '@constants'
import { LoginIcon, MailIcon, ArrowLeftIcon } from '@heroicons/react/outline'

import Card from '@common/Card'
import Title from '@common/Title'
import Button from '@common/Button'
import LoginLayout from '@layouts/admin/Login'

const Login = () => {
    useEffect(() => {
        const token = localStorage.getItem(AUTH.TOKEN_STORAGE_KEY)

        if (token) {
            Router.push('/admin/dashboard')
        }
    }, [])

    const handleSumbit = () => {
        // TODO: Set correct token
        localStorage.setItem(AUTH.TOKEN_STORAGE_KEY, 'token')
        // We use replace here since going back in the history will only redirect you
        // to the same page as you are currently on. Replacing the history means that
        // you will be redirected to the page previous to the login page.
        Router.replace('/admin/dashboard')
    }

    return (
        <>
            <Card containerClassName="space-y-md">
                <Title text="Login" />
                <Button type="secondary" onClick={handleSumbit}>
                    <span>Logga in</span>
                    <LoginIcon />
                </Button>
            </Card>
            <section className="flex justify-center w-full mt-md">
                <Link href="/" passHref={true}>
                    <Button type="transparent" className="text-white">
                        <ArrowLeftIcon />
                        <span>Tillbaka till startsidan</span>
                    </Button>
                </Link>
            </section>
            <section className="absolute bottom-0 flex flex-col items-center w-full text-white">
                <Button type="primary" className="mb-lg" href={`mailto://${CONTACT_EMAIL}`}>
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
