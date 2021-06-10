import React from 'react'
import Image from 'next/image'
import { extend } from '@utils'

export type IconSize = 'small' | 'default' | 'large'

export interface Props {
    src: string | null
    size?: IconSize
    href?: string
    className?: string
}

export const ICON_SIZES: Record<IconSize, number> = {
    small: 30,
    default: 40,
    large: 64,
}

const NationIcon = ({ size, src, href, className }: Props) => {
    const sizing = size ? ICON_SIZES[size] : ICON_SIZES['default']
    const base = 'flex bg-background dark:bg-background-highlight p-xsm rounded'
    const classes = extend(base, className)
    const content = (
        <>{src && <Image src={src} width={sizing} height={sizing} objectFit="contain" />}</>
    )

    if (href) {
        return (
            <a href={href} className={classes}>
                {content}
            </a>
        )
    }

    return <div className={classes}>{content}</div>
}

export default NationIcon
