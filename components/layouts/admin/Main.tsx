import React from 'react'
import Header from '@components/admin/Header'
import ProtectedRoute from '@components/auth/ProtectedRoute'

export interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const MainLayout = ({ children }: Props) => {
    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-background-extra">
                <div className="absolute w-screen h-screen z-behind bg-primary h-admin-header" />
                <Header />
                <main className="container relative mx-auto">{children}</main>
            </div>
        </ProtectedRoute>
    )
}

export default MainLayout
