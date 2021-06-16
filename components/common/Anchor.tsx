import clsx from 'clsx'
import React from 'react'

export interface Props {
    id: string
    offsetClass?: string
    children?: React.ReactNode
}

const Anchor = ({ id, offsetClass, children }: Props) => {
    return (
        <div>
            <div className={clsx('relative invisible block', offsetClass)} id={id} />
            {children}
        </div>
    )
}

export default Anchor
