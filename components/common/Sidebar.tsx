import clsx from 'clsx'
import React from 'react'

export interface Props {
    widthClass?: string
    offsetClass?: string
    side?: 'left' | 'right'
    children?: React.ReactNode
}

const Sidebar = ({ widthClass, offsetClass, side, children }: Props) => {
    return (
        <aside className={clsx(
            'relative z-30 space-y-md',
            side === 'right' ? 'ml-xlg' : 'mr-xlg',
            widthClass || 'w-sidebar-navigation'
        )}>
            <div className={clsx('sticky', offsetClass || 'top-admin-header-offset')}>
                {children}
            </div>
        </aside>
    )
}

export default Sidebar
