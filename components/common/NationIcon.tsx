import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

export type IconSize = 'small' | 'default' | 'large'

export interface Props {
    src?: string | null
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
    const base = 'flex p-xsm rounded'
    const classes = clsx(base, className)
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
