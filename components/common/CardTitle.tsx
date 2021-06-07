import React from 'react'

export interface Props {
    title: string
    subtitle?: string
}

const CardTitle = ({ title, subtitle }: Props) => {
    return (
        <>
            <h2 className="text-lg font-bold text-text-highlight">{title}</h2>
            <p className="text-text">{subtitle}</p>
        </>
    )
}

export default CardTitle
