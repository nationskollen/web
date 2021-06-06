import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { AUTH } from '@constants'
import { isClient } from '@utils'
import { AuthProvider } from '@contexts/auth'

export interface Props {
    redirectTo?: string
    children: React.ReactNode | React.ReactNode[]
}

const ProtectedRoute = ({ redirectTo, children }: Props) => {
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        if (isClient()) {
            // Saving the token inside localStorage is bad practice.
            // In the future, it would be better to use server sessions.
            // Sessions also allow us to check if the user is logged in directly on the
            // server, which will remove the flashing content.
            const token = localStorage.getItem(AUTH.TOKEN_STORAGE_KEY)

            if (!token) {
                Router.push(redirectTo || AUTH.DEFAULT_REDIRECT_ROUTE)
            } else {
                setToken(token)
            }
        }
    }, [])

    return (
        <AuthProvider value={{ token }}>
            {token ? (
                children
            ) : (
                <div className="flex items-center justify-center w-screen h-screen">
                    <p className="text-white">Laddar...</p>
                </div>
            )}
        </AuthProvider>
    )
}

export default ProtectedRoute
