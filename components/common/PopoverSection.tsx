import React from 'react'
import { extend } from '@utils'

export interface Props {
    className?: string
    children?: React.ReactNode
}

const PopoverSection = ({ className, children }: Props) => {
    const base =
        'border-b-1 border-border pb-3 mb-3 border-border dark:border-border-dark last:border-b-0 last:mb-0 last:pb-0'
    const classes = extend(base, className)

    return <section className={classes}>{children}</section>
}

export default PopoverSection
