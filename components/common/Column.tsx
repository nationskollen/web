import clsx from 'clsx'
import React from 'react'

export interface Props {
    className?: string
    children?: React.ReactNode
}

const Column = ({ className, children }: Props) => {
    return (
        <div
            className={clsx(
                'flex flex-col w-full space-y-md',
                className,
            )}>
            {children}
        </div>
    )
}

export default Column
