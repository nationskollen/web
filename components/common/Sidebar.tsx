import clsx from 'clsx'
import React from 'react'

export interface Props {
    offsetClass?: string
    children?: React.ReactNode
}

const Sidebar = ({ offsetClass, children }: Props) => {
    return (
        <aside className="relative z-30 mr-xlg w-sidebar-navigation space-y-md">
            <div className={clsx('sticky', offsetClass || 'top-admin-header-offset')}>
                {children}
            </div>
        </aside>
    )
}

export default Sidebar
