import React from 'react'
import { extend } from '@utils'

export interface Props {
    className?: string
    children?: React.ReactElement | React.ReactElement[]
}

const PopoverSection = ({ className, children }: Props) => {
    const base = 'border-b-1 border-border pb-4 mb-4 border-border-dark last:border-0'
    const classes = extend(base, className)

    return <section className={classes}>{children}</section>
}

export default PopoverSection
