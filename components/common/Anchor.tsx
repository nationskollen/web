import clsx from 'clsx'
import React from 'react'

export interface Props {
    id?: string
    offsetClass?: string
    children?: React.ReactNode
}

const Anchor = ({ id, offsetClass, children }: Props) => {
    return (
        <>
            {id && (
                <div
                    className={clsx('relative invisible block', offsetClass || '-top-md')}
                    id={id}
                />
            )}
            {children}
        </>
    )
}

export default Anchor
