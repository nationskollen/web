/**
 * Renders a basic card.
 *
 * @module Common
 */
import React from 'react'

export interface Props {
    id?: string
    className?: string
    containerClassName?: string
    label?: string
    noPadding?: boolean
    children?: React.ReactElement | React.ReactElement[]
}

const Card = ({ id, label, noPadding, className, containerClassName, children }: Props) => {
    const base =
        'card shadow-md rounded border-card bg-card dark:border-border-dark text-text w-full overflow-hidden'
    const containerBase = `flex flex-col ${noPadding ? '' : 'p-6'}`
    const classes = className ? `${base} ${className}` : base
    const containerClasses = containerClassName
        ? `${containerBase} ${containerClassName}`
        : containerBase

    return (
        <article className={classes} id={id}>
            {label && (
                <h3 className="font-bold tracking-wider uppercase text-xsm text-primary-text dark:text-text-highlight border-b-1 border-border p-md">
                    {label}
                </h3>
            )}
            <div className={containerClasses}>{children}</div>
        </article>
    )
}

export default Card
