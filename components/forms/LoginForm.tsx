import Router from 'next/router'
import { DEFAULT_FORM_PROPS, AUTH } from '@constants'
import { useForm } from 'react-hook-form'
import { LockClosedIcon, LoginIcon, MailIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import Button from '@common/Button'

export interface FormValues {
    email: string
    password: string
}

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>(DEFAULT_FORM_PROPS)

    const submit = (data: FormValues) => {
        console.log(data)

        // TODO: Set correct token and oid
        localStorage.setItem(AUTH.USER_STORAGE_KEY, JSON.stringify({ token: 'token', oid: 400 }))

        // We use replace here since going back in the history will only redirect you
        // to the same page as you are currently on. Replacing the history means that
        // you will be redirected to the page previous to the login page.
        Router.replace('/admin/dashboard')
    }

    return (
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
            <Button style="primary" className="w-full mt-6" type="submit">
                <span>Logga in</span>
                <LoginIcon />
            </Button>
        </form>
    )
}

export default LoginForm
