import clsx from 'clsx'
import React from 'react'

export interface Props {
    className?: string
    children?: React.ReactNode
}

const PopoverSection = ({ className, children }: Props) => {
    return (
        <section
            className={clsx(
                'border-b-1 border-border pb-3 mb-3 border-border',
                'dark:border-border-dark last:border-b-0 last:mb-0 last:pb-0',
                className
            )}
        >
            {children}
        </section>
    )
}

export default PopoverSection
