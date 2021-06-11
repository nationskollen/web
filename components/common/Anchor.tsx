import React from 'react'
import { extend } from '@utils'

export interface Props {
    id: string
    offsetClass?: string
    children?: React.ReactNode
}

const Anchor = ({ id, offsetClass, children }: Props) => {
    return (
        <div>
            <div className={extend('relative invisible block', offsetClass)} id={id} />
            {children}
        </div>
    )
}

export default Anchor
