import React from 'react'
import Header from '@components/admin/Header'
import FixedHeader from '@components/admin/FixedHeader'
import ProtectedRoute from '@components/auth/ProtectedRoute'

export interface Props {
    children: React.ReactElement | React.ReactElement[]
}

const MainLayout = ({ children }: Props) => {
    return (
        <ProtectedRoute>
            <div className="flex flex-col h-full min-h-screen bg-background-extra dark:bg-background">
                <div className="absolute w-screen h-screen z-behind bg-primary h-admin-header" />
                <Header />
                <FixedHeader />
                <main className="container relative flex flex-col flex-1 h-full mx-auto px-md mt-md">
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    )
}

export default MainLayout
