/**
 * Renders a basic card.
 *
 * @module Common
 */
import clsx from 'clsx'
import React from 'react'
import { HashtagIcon } from '@heroicons/react/solid'

export interface Props {
    id?: string
    className?: string
    containerClassName?: string
    noPadding?: boolean
    radiusSmall?: boolean
    active?: boolean
    children?: React.ReactNode
}

const Card = ({
    id,
    active,
    noPadding,
    radiusSmall,
    className,
    containerClassName,
    children,
}: Props) => {
    return (
        <article
            id={id}
            className={clsx(
                'relative card shadow-md border-card w-full flex flex-col',
                'dark:border-border-dark border-1 bg-card text-text',
                radiusSmall ? 'rounded-sm' : 'rounded',
                className
            )}
        >
            {active && (
                <div
                    className={clsx(
                        'absolute rounded-full shadow-lg -top-sm',
                        '-left-sm p-sm bg-primary-extra'
                    )}
                >
                    <HashtagIcon className="w-4 h-4 text-white" />
                </div>
            )}
            <div className={clsx('flex flex-col flex-1', !noPadding && 'p-6', containerClassName)}>
                {children}
            </div>
        </article>
    )
}

export default Card
