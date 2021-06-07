import React from 'react'

export interface Props {
    id?: string
    className?: string
    label?: string
    noPadding?: boolean
    children?: React.ReactElement | React.ReactElement[]
}

const Card = ({ id, label, noPadding, className, children }: Props) => {
    const base =
        'card shadow-md rounded border-card bg-card dark:border-border-dark text-text w-full overflow-hidden'
    const classes = className ? `${base} ${className}` : base

    return (
        <article className={classes} id={id}>
            {label && (
                <h3 className="font-bold tracking-wider uppercase text-xsm text-primary-text dark:text-text-highlight border-b-1 border-border p-md">
                    {label}
                </h3>
            )}
            <div className={`flex flex-col ${noPadding ? '' : 'p-md'}`}>{children}</div>
        </article>
    )
}

export default Card
