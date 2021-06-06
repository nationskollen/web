import React from 'react'

export interface Props {
    className?: string
    title?: string
    noPadding?: boolean
    children?: React.ReactElement | React.ReactElement[]
}

const Card = ({ title, noPadding, className, children }: Props) => {
    const base =
        'card shadow-md rounded border-card bg-card dark:border-border-dark text-text w-full overflow-hidden'
    const classes = className ? `${base} ${className}` : base

    return (
        <article className={classes}>
            {title && (
                <h3 className="font-bold tracking-wider uppercase text-xsm text-text border-b-1 border-border py-sm px-md">
                    {title}
                </h3>
            )}
            <div className={`flex flex-col ${noPadding ? '' : 'p-md'}`}>{children}</div>
        </article>
    )
}

export default Card
