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
    active?: boolean
    children?: React.ReactElement | React.ReactElement[]
}

const Card = ({ id, label, active, noPadding, className, containerClassName, children }: Props) => {
    const base =
        'card shadow-md rounded border-card border-1 bg-card dark:border-border-dark text-text w-full'
    const containerBase = `flex flex-col ${noPadding ? '' : 'p-6'}`
    const classes = className ? `${base} ${className}` : base
    const containerClasses = containerClassName
        ? `${containerBase} ${containerClassName}`
        : containerBase

    return (
        <article className={classes} id={id}>
            {label && (
                <div className="text-primary-text dark:text-text-highlight border-b-1 border-border p-md px-lg">
                    <h3 className="font-bold tracking-wider uppercase text-xsm ">{label}</h3>
                </div>
            )}
            <div className={containerClasses}>{children}</div>
        </article>
    )
}

export default Card
