import React from 'react'
import { extend } from '@utils'

export interface Props {
    columns?: number
    className?: string
    children?: React.ReactNode
}

const InputGroup = ({ columns, className, children }: Props) => {
    return (
        <div className={extend(
            `grid grid-cols-${columns || React.Children.count(children)} gap-md`,
            className
        )}>
            {children}
        </div>
    )
}

export default InputGroup
