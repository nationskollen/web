import { useEffect } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { DEFAULT_FORM_PROPS, AUTH } from '@constants'
import { HttpErrorCodes, useLogin, ApiError } from '@nationskollen/sdk'
import { LockClosedIcon, LoginIcon, MailIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import Button from '@common/Button'
import ErrorDialog from '@common/dialogs/ErrorDialog'

export interface FormValues {
    email: string
    password: string
}

const LoginForm = () => {
    const { result, error, loading, execute } = useLogin()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>(DEFAULT_FORM_PROPS)

    const submit = async (data: FormValues) => {
        execute(data.email, data.password)
    }

    const getErrorDialog = () => {
        if (!error) {
            return null
        }

        switch (error.type) {
            case HttpErrorCodes.Unauthorized:
                return (
                    <ErrorDialog
                        title="Kunde inte logga in"
                        description="
                            Det verkar som om du skriver in fel användarnamn eller lösenord
                        "
                    />
                )
            case HttpErrorCodes.ValidationError:
                return (
                    <ErrorDialog
                        title="Dina uppgifter har fel format!"
                        description="
                            Det verkar som om webbutvecklings-gorillorna har gjort ett misstag.
                            Dina uppgiften överensstämmer tydligen inte med det efterfrågade formatet.
                            Är du säker på att du skrivit in rätt uppgifter?
                        "
                    />
                )
            default:
                return <ErrorDialog title="Något blev fel!" description="Försök igen senare" />
        }
    }

    useEffect(() => {
        if (!result) {
            return
        }

        localStorage.setItem(
            AUTH.USER_STORAGE_KEY,
            JSON.stringify({
                token: result.token,
                oid: result.oid,
            })
        )

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
