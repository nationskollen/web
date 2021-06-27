import React from 'react'

import Title from '@common/Title'
import Anchor from '@common/Anchor'
import IconCircle from '@common/IconCircle'

export interface Props {
    title: string
    id?: string
    icon?: React.ElementType
    children: React.ReactNode | React.ReactNode[]
}

const FormSection = ({ id, title, icon, children }: Props) => {
    return (
        <Anchor id={id}>
            <section className="space-y-md mb-lg pb-lg border-b-1 border-border last:border-b-0 last:mb-sm">
                <div className="flex flex-row items-center space-x-md">
                    {icon && <IconCircle icon={icon} />}
                    <Title text={title} />
                </div>
                {children}
            </section>
        </Anchor>
    )
}

export default FormSection
