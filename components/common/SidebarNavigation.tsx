import React, { useMemo } from 'react'
import Card from '@common/Card'
import SidebarNavigationLink from '@common/SidebarNavigationLink'

export interface LinkItem {
    href: string
    title: string
}

export interface Props {
    links: Array<LinkItem>
}

const SidebarNavigation = ({ links }: Props) => {
    if (links.length === 0) {
        return null
    }

    const content = useMemo(() => {
        return links.map((link) => <SidebarNavigationLink link={link} key={link.href} />)
    }, [links])

    return (
        <aside className="z-30 mr-lg w-sidebar-navigation">
            <Card className="sticky top-admin-header" title="Innehåll" noPadding={true}>
                <div className="flex flex-col p-sm">{content}</div>
            </Card>
        </aside>
    )
}

export default SidebarNavigation
