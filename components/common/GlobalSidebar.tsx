import React from 'react'

export interface Props {
    children?: React.ReactNode
}

const GlobalSidebar = ({ children }: Props) => {
    return (
        <aside className="fixed left-0 top-0 w-sidebar h-screen z-10 bg-primary">
            <div className="flex flex-col justify-between h-full p-sm">{children}</div>
        </aside>
    )
}

export default GlobalSidebar
