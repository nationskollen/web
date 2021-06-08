import Router from 'next/router'
import { AUTH } from '@constants'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { LockClosedIcon, LoginIcon, MailIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import Button from '@common/Button'

export interface FormValues {
    email: string
    password: string
}

const LoginForm = () => {
    const handleSumbit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        console.log(values)

        // TODO: Set this to false when we get a response from the server
        setSubmitting(false)

        // TODO: Set correct token and oid
        localStorage.setItem(AUTH.USER_STORAGE_KEY, JSON.stringify({ token: 'token', oid: 400 }))

        // We use replace here since going back in the history will only redirect you
        // to the same page as you are currently on. Replacing the history means that
        // you will be redirected to the page previous to the login page.
        Router.replace('/admin/dashboard')
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={handleSumbit}
        >
            <Form className="space-y-md">
                <Input id="email" label="Email" type="email" placeholder="din@email.se" required>
                    <MailIcon />
                </Input>
                <Input
                    id="password"
                    label="Lösenord"
                    type="password"
                    placeholder="Lösenord"
                    required
                >
                    <LockClosedIcon />
                </Input>
                <Button style="secondary" className="w-full" type="submit">
                    <span>Logga in</span>
                    <LoginIcon />
                </Button>
            </Form>
        </Formik>
    )
}

export default LoginForm
