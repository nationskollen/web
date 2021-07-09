import { useEffect } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { DEFAULT_FORM_PROPS, AUTH } from '@constants'
import { HttpErrorCodes, useLogin } from '@nationskollen/sdk'
import { LockClosedIcon, LoginIcon, MailIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import Button from '@common/Button'
import ErrorDialog from '@dialogs/ErrorDialog'

export interface FormValues {
    email: string
    password: string
}

const LoginForm = () => {
    const { t } = useTranslation('common')
    const { result, error, loading, execute } = useLogin()
    const { register, handleSubmit } = useForm<FormValues>(DEFAULT_FORM_PROPS)

    const submit = async (data: FormValues) => {
        execute(data.email, data.password)
    }

    const getErrorDialog = () => {
        if (!error) {
            return null
        }

        switch (error.type) {
            // TODO: Change this when PR has been merged
            // https://github.com/nationskollen/server/issues/163
            case HttpErrorCodes.BadRequest:
                return (
                    <ErrorDialog
                        title={t('error.invalid_credentials.title')}
                        description={t('error.invalid_credentials.description')}
                    />
                )
            case HttpErrorCodes.ValidationError:
                return (
                    <ErrorDialog
                        title={t('error.invalid_format_credentials.title')}
                        description={t('error.invalid_format_credentials.description')}
                    />
                )
            default:
                return (
                    <ErrorDialog
                        title={t('error.unknown.title')}
                        description={t('error.unknown.description')}
                    />
                )
        }
    }

    useEffect(() => {
        if (!result) {
            return
        }

        localStorage.setItem(AUTH.TOKEN_STORAGE_KEY, result.token)

        // We use replace here since going back in the history will only redirect you
        // to the same page as you are currently on. Replacing the history means that
        // you will be redirected to the page previous to the login page.
        Router.replace('/admin/dashboard')
    }, [result])

    return (
        <>
            {getErrorDialog()}
            <form onSubmit={handleSubmit(submit)}>
                <div className="space-y-md">
                    <Input
                        type="email"
                        label={t('auth.field.email.title')}
                        placeholder={t('auth.field.email.placeholder')}
                        {...register('email', { required: t('validation.required') })}
                    >
                        <MailIcon />
                    </Input>
                    <Input
                        type="password"
                        label={t('auth.field.password.title')}
                        placeholder={t('auth.field.password.placeholder')}
                        {...register('password', { required: t('validation.required') })}
                    >
                        <LockClosedIcon />
                    </Input>
                </div>
                <Button style="primary" className="w-full mt-6" type="submit" loading={loading}>
                    <span>{t('auth.login')}</span>
                    <LoginIcon />
                </Button>
            </form>
        </>
    )
}

export default LoginForm
