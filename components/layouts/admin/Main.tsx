import React from 'react'
import Header from '@components/admin/Header'

export interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen bg-background-extra">
            <div className="absolute w-screen h-screen z-behind bg-primary h-admin-header" />
            <Header />
            <main className="container relative mx-auto">{children}</main>
        </div>
    )
}

export default MainLayout
