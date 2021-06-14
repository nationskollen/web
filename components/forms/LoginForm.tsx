import { useEffect } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { useAsyncCallback } from 'react-async-hook'
import { useApi, ApiError } from '@nationskollen/sdk'
import { DEFAULT_FORM_PROPS, AUTH } from '@constants'
import { LockClosedIcon, LoginIcon, MailIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import Button from '@common/Button'
import ErrorDialog from '@common/dialogs/ErrorDialog'

export interface FormValues {
    email: string
    password: string
}

const LoginForm = () => {
    const api = useApi()
    const { result, error, loading, execute } = useAsyncCallback(async (email: string, password: string) => {
        return api.auth.login(email, password)
    })

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>(DEFAULT_FORM_PROPS)

    const submit = async (data: FormValues) => {
        execute(data.email, data.password)
    }

    useEffect(() => {
        if (result) {
            console.log(result)

            // TODO: Set correct token and oid
            localStorage.setItem(AUTH.USER_STORAGE_KEY, JSON.stringify({ token: 'token', oid: 400 }))

            // We use replace here since going back in the history will only redirect you
            // to the same page as you are currently on. Replacing the history means that
            // you will be redirected to the page previous to the login page.
            // Router.replace('/admin/dashboard')
        } else {
            console.log(result)
        }
    }, [result])

    useEffect(() => {
        if (error && error.hasOwnProperty('data')) {
            const apiError = error as ApiError
            console.log(apiError.data)
        }
    }, [error])

    return (
        <>
            {error && <ErrorDialog title="Kunde inte logga in" description="Fel lösenord" />}
            <form onSubmit={handleSubmit(submit)}>
                <div className="space-y-md">
                    <Input
                        type="email"
                        label="Email"
                        placeholder="din@email.se"
                        error={errors.email}
                        {...register('email', { required: 'Detta fält är obligatoriskt' })}
                    >
                        <MailIcon />
                    </Input>
                    <Input
                        type="password"
                        label="Lösenord"
                        placeholder="Lösenord"
                        error={errors.password}
                        {...register('password', { required: 'Detta fält är obligatoriskt' })}
                    >
                        <LockClosedIcon />
                    </Input>
                </div>
                <Button style="primary" className="w-full mt-6" type="submit" loading={loading}>
                    <span>Logga in</span>
                    <LoginIcon />
                </Button>
            </form>
        </>
    )
}

export default LoginForm
