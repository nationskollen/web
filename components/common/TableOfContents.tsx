/**
 * Renders a table of contents for a page, based on
 * the list of sections passed into the `sections` prop.
 *
 * For this to work, make sure you have a corresponding element
 * with an id for each element in the `sections` array.
 *
 * Example usage:
 * ```typescript
 * <TableOfContents sections={[{ href: '#test', title: 'Test' }]} />
 * // somewhere else
 * <Section id="test">
 *     // content
 * </Section>
 * ```
 *
 * @module Common
 */
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

const TableOfContents = ({ sections }: Props) => {
    if (sections.length === 0) {
        return null
    }

    const content = useMemo(() => {
        return sections.map((section) => (
            <TableOfContentsLink section={section} key={section.href} />
        ))
    }, [sections])

    return (
        <Card label="Innehåll" noPadding={true}>
            <ul className="p-sm">{content}</ul>
        </Card>
    )
}

export default TableOfContents
