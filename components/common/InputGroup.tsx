import clsx from 'clsx'
import React from 'react'

export interface Props {
    columns?: number
    className?: string
    children?: React.ReactNode
}

const InputGroup = ({ columns, className, children }: Props) => {
    return (
        <div
            className={clsx(
                `grid grid-cols-${columns || React.Children.count(children)} gap-md`,
                className
            )}
        >
            {children}
        </div>
    )
}

export default InputGroup
