import React from 'react'

export interface Props {
    children?: React.ReactNode
}

const Sidebar = ({ children }: Props) => {
    return (
        <aside className="relative z-30 mr-xlg w-sidebar-navigation space-y-md">
            <div className="sticky top-lg">
                {children}
            </div>
        </aside>
    )
}

export default Sidebar
