import React, { useMemo } from 'react'
import Card from '@common/Card'
import TableOfContentsLink from '@common/TableOfContentsLink'

export interface Section {
    href: string
    title: string
}

export interface Props {
    sections: Array<Section>
}

const SidebarNavigation = ({ sections }: Props) => {
    if (sections.length === 0) {
        return null
    }

    const content = useMemo(() => {
        return sections.map((section) => (
            <TableOfContentsLink section={section} key={section.href} />
        ))
    }, [sections])

    return (
        <Card className="sticky top-admin-header" label="Innehåll" noPadding={true}>
            <ul className="p-sm">{content}</ul>
        </Card>
    )
}

export default SidebarNavigation
