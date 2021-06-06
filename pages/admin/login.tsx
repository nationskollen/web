import { useEffect } from 'react'
import Card from '@common/Card'
import Router from 'next/router'
import { AUTH } from '@constants'
import LoginLayout from '@layouts/admin/Login'

const Login = () => {
    useEffect(() => {
        const token = localStorage.getItem(AUTH.TOKEN_STORAGE_KEY)

        if (token) {
            Router.push('/admin/dashboard')
        }
    }, [])

    return (
        <Card>
            <p>Login</p>
        </Card>
    )
}

Login.getLayout = (page: React.ReactElement) => <LoginLayout>{page}</LoginLayout>

export default Login
