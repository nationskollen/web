import React from 'react'
import Title from '@common/Title'

export interface Props {
    title: string
    subtitle?: string
}

const CardTitle = ({ title, subtitle }: Props) => {
    return (
        <>
            <Title text={title} />
            <p className="leading-snug text-md">{subtitle}</p>
        </>
    )
}

export default CardTitle
