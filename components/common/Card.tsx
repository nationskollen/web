import React from 'react'

export interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const Card = ({ children }: Props) => {
    return (
        <div className="border rounded border-card p-md bg-card dark:border-border-dark text-text">
            {children}
        </div>
    )
}

export default Card
