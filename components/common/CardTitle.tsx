import React from 'react'
import Title from '@common/Title'

export interface Props {
    title: string
    subtitle?: string
    children?: React.ReactNode
}

const CardTitle = ({ title, subtitle, children }: Props) => {
    return (
        <section className="flex flex-row items-start justify-between">
            <div>
                <Title text={title} className="text-text-highlight" />
                <p className="leading-snug text-md">{subtitle}</p>
            </div>
            {children}
        </section>
    )
}

export default CardTitle
