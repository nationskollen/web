import React, { useState, useEffect, useCallback } from 'react'
import Router from 'next/router'
import { AUTH } from '@constants'
import { isClient } from '@utils'
import { AuthProvider } from '@contexts/Auth'

export interface Props {
    redirectTo?: string
    children: React.ReactNode
}

const ProtectedRoute = ({ redirectTo, children }: Props) => {
    const [oid, setOid] = useState<number | null>(null)
    const [token, setToken] = useState<string | null>(null)

    useEffect(() => {
        if (isClient()) {
            // Saving the token inside localStorage is bad practice.
            // In the future, it would be better to use server sessions.
            // Sessions also allow us to check if the user is logged in directly on the
            // server, which will remove the flashing content.
            const user = localStorage.getItem(AUTH.USER_STORAGE_KEY)

            if (!user) {
                Router.push(redirectTo || AUTH.DEFAULT_REDIRECT_ROUTE)
            } else {
                const parsed = JSON.parse(user)
                setToken(parsed.token)
                setOid(parseInt(parsed.oid))
            }
        }
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem(AUTH.USER_STORAGE_KEY)
        Router.replace('/admin/login')
    }, [])

    return (
        <AuthProvider value={{ token, oid, logout }}>
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
