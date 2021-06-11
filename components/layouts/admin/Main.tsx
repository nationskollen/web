import React from 'react'
import Header from '@components/admin/Header'
import ProtectedRoute from '@components/auth/ProtectedRoute'
import Navigation from '@components/admin/Navigation'

export interface Props {
    children: React.ReactNode
}

export const Template = ({ children }: Props) => {
    return (
        <ProtectedRoute>
            <div className="relative flex flex-col h-full min-h-screen bg-background-extra dark:bg-background">
                <div className="absolute w-screen h-screen z-behind bg-primary h-admin-header" />
                <Header />
                <Navigation />
                <main className="container relative flex flex-row items-start flex-1 h-full mx-auto mt-8 px-md mb-xlg">
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    )
}

export const Wrapper = ({ children }: Props) => {
    return <>{children}</>
}

export const Content = ({ children }: Props) => {
    return <div className="flex flex-col flex-1 space-y-lg divide-y-md">{children}</div>
}

export const Sidebar = ({ children }: Props) => {
    return (
        <aside className="sticky z-30 top-admin-header mr-lg w-sidebar-navigation space-y-md">
            {children}
        </aside>
    )
}

export default {
    Template,
    Wrapper,
    Content,
    Sidebar,
}
