import React, { useState, useEffect, useCallback } from 'react'
import Router from 'next/router'
import { AUTH } from '@constants'
import { isClient } from '@utils'
import { AuthProvider } from '@contexts/Auth'
import { useApi, AuthenticatedUser } from '@nationskollen/sdk'

import LoadingIndicator from '@common/LoadingIndicator'

export interface Props {
    redirectTo?: string
    children: React.ReactNode
}

const ProtectedRoute = ({ redirectTo, children }: Props) => {
    const api = useApi()
    const [user, setUser] = useState<AuthenticatedUser>()

    const logout = useCallback(() => {
        localStorage.removeItem(AUTH.TOKEN_STORAGE_KEY)
        Router.replace(redirectTo || '/admin/login')
    }, [])

    const authenticate = async (token: string) => {
        try {
            const user = await api.auth.setToken(token)
            setUser(user)
        } catch (_) {
            logout()
        }
    }

    useEffect(() => {
        if (isClient()) {
            // Saving the token inside localStorage is bad practice.
            // In the future, it would be better to use server sessions.
            // Sessions also allow us to check if the user is logged in directly on the
            // server, which will remove the flashing content.
            const token = localStorage.getItem(AUTH.TOKEN_STORAGE_KEY)

            if (token) {
                authenticate(token)
            } else {
                logout()
            }
        }
    }, [])

    return (
        <AuthProvider value={{ user: user as AuthenticatedUser, logout }}>
            {user ? (
                children
            ) : (
                <div className="flex items-center justify-center w-screen h-screen">
                    <LoadingIndicator size="medium" />
                </div>
            )}
        </AuthProvider>
    )
}

export default ProtectedRoute
