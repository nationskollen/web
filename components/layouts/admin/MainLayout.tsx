import clsx from 'clsx'
import React from 'react'

import Container from '@common/Container'
import Navigation from '@components/admin/Navigation'
import AdminSidebar from '@components/admin/AdminSidebar'
import ProtectedRoute from '@components/auth/ProtectedRoute'

export type ContentDirection = 'row' | 'column'

export interface Props {
    children: React.ReactNode
}

export interface ContentProps extends Props {
    direction?: ContentDirection
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
        <Container
            as="header"
            className={clsx(
                'relative min-h-header h-auto py-md',
                'flex flex-col justify-center items-start space-y-sm'
            )}
        >
            {children}
        </Container>
    )
}

const Content = ({ direction, children }: ContentProps) => {
    return (
        <div className="bg-background dark:bg-background-extra flex-1">
            <Container as="main" className={clsx(
                'flex flex-1 py-sm py-xlg',
                direction === 'row' ? 'flex-row' : 'flex-col',
            )}>
                {children}
            </Container>
        </div>
    )
}

const getTemplate = (page: React.ReactNode) => <Template>{page}</Template>

export default {
    Template,
    Wrapper,
    Header,
    Content,
    getTemplate,
}
