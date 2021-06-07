import React from 'react'
import SidebarNavigation, { LinkItem } from '@common/SidebarNavigation'

export interface Props {
    links: Array<LinkItem>
    children: React.ReactElement | React.ReactElement[]
}

const SidebarLayout = ({ links, children }: Props) => {
    return (
        <div className="flex flex-row flex-1">
            <SidebarNavigation links={links} />
            <div className="flex flex-col flex-1 space-y-lg">{children}</div>
        </div>
    )
}

export default SidebarLayout
