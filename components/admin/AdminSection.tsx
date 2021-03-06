import React from 'react'
import Section from '@common/Section'

export interface Props {
    id: string
    children?: React.ReactNode
}

const AdminSection = ({ id, children }: Props) => {
    return (
        <Section id={id} offsetClass="-top-admin-header">
            {children}
        </Section>
    )
}

export default AdminSection
