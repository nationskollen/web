import clsx from 'clsx'
import React from 'react'

import Container from '@common/Container'
import Navigation from '@components/admin/Navigation'
import AdminSidebar from '@components/admin/AdminSidebar'
import ProtectedRoute from '@components/auth/ProtectedRoute'

export interface Props {
    children: React.ReactNode
}

const Template = ({ children }: Props) => {
    return (
        <ProtectedRoute>
            <AdminSidebar />
            <div
                className={clsx(
                    'ml-sidebar-offset relative flex flex-col h-full min-h-screen',
                    'bg-background-extra dark:bg-background'
                )}
            >
                <Navigation />
                {children}
            </div>
        </ProtectedRoute>
    )
}

const Wrapper = ({ children }: Props) => {
    return <>{children}</>
}

const Header = ({ children }: Props) => {
    return (
        <Container as="header" className="relative h-header py-sm flex flex-col justify-center">
            {children}
        </Container>
    )
}

const Content = ({ children }: Props) => {
    return (
        <div className="bg-background dark:bg-background-extra flex-1">
            <Container as="main" className="flex flex-col flex-1 py-sm py-xlg">
                {children}
            </Container>
        </div>
    )
}

const Sidebar = ({ children }: Props) => {
    return (
        <aside className="sticky z-30 top-admin-header mr-lg w-sidebar-navigation space-y-md">
            {children}
        </aside>
    )
}

const getTemplate = (page: React.ReactNode) => (
    <Template>{page}</Template>
)

export default {
    Template,
    Wrapper,
    Header,
    Content,
    Sidebar,
    getTemplate,
}
