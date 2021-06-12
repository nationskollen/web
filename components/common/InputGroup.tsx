import React from 'react'
import { extend } from '@utils'

export interface Props {
    className?: string
    children?: React.ReactNode
}

const InputGroup = ({ className, children }: Props) => {
    return (
        <div className={extend('space-x-md flex flex-row', className)}>
            {children}
        </div>
    )
}

export default InputGroup
