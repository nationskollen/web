import clsx from 'clsx'
import React from 'react'

export interface Props {
    noVerticalSpacing?: boolean
    className?: string
    children?: React.ReactNode
}

const Column = ({ noVerticalSpacing, className, children }: Props) => {
    return (
        <div
            className={clsx(
                'flex flex-col w-full',
                !noVerticalSpacing && 'space-y-md',
                className,
            )}>
            {children}
        </div>
    )
}

export default Column
