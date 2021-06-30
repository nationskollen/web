import clsx from 'clsx'
import React from 'react'

export interface Props {
    className?: string
    children?: React.ReactNode
}

const Row = ({ className, children }: Props) => {
    return <div className={clsx('flex flex-row w-full space-x-md', className)}>{children}</div>
}

export default Row
