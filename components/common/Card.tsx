/**
 * Renders a basic card.
 *
 * @module Common
 */
import React from 'react'
import { extend, combine } from '@utils'
import { HashtagIcon } from '@heroicons/react/solid'

export interface Props {
    id?: string
    className?: string
    containerClassName?: string
    label?: string
    noPadding?: boolean
    active?: boolean
    children?: React.ReactNode
}

const Card = ({ id, label, active, noPadding, className, containerClassName, children }: Props) => {
    const base = combine(
        'relative card shadow-md rounded border-card w-full flex flex-col',
        'dark:border-border-dark border-1 bg-card text-text'
    )
    const containerBase = `flex flex-col flex-1 ${noPadding ? '' : 'p-6'}`
    const containerClasses = containerClassName
        ? `${containerBase} ${containerClassName}`
        : containerBase

    return (
        <article className={extend(base, className)} id={id}>
            {active && (
                <div className="absolute rounded-full shadow-lg -top-sm -left-sm p-sm bg-primary-extra">
                    <HashtagIcon className="w-4 h-4 text-white" />
                </div>
            )}
            {label && (
                <div className="text-primary-text dark:text-text-highlight border-b-1 border-border p-md px-lg">
                    <h3 className="font-bold">{label}</h3>
                </div>
            )}
            <div className={containerClasses}>{children}</div>
        </article>
    )
}

export default Card
