import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

export type AvatarSizes = 'small' | 'default' | 'large'

export interface AvatarSizingInformation {
    container: string
    fallback: string
    spacing: string
}

export interface Props {
    src?: string | null
    size?: AvatarSizes
    className?: string
    padding?: boolean
    fallbackIcon?: React.ElementType
    children?: React.ReactNode
}

const AVATAR_SIZES: Record<AvatarSizes, AvatarSizingInformation> = {
    small: {
        container: 'w-12 h-12',
        fallback: 'p-sm',
        spacing: 'p-xsm',
    },
    default: {
        container: 'w-16 h-16',
        fallback: 'p-sm',
        spacing: 'p-sm',
    },
    large: {
        container: 'w-20 h-20',
        fallback: 'p-md',
        spacing: 'p-sm',
    },
}

const Avatar = ({ src, size, padding, className, fallbackIcon: FallbackIcon, children }: Props) => {
    const sizing = AVATAR_SIZES[size || 'default']

    return (
        <div
            className={clsx(
                'rounded bg-background-highlight dark:bg-background-extra',
                sizing.container,
                padding && sizing.spacing,
                className
            )}
        >
            {src ? (
                <div className="relative h-full w-full">
                    <Image src={src} layout="fill" objectFit="contain" />
                </div>
            ) : (
                <div className={clsx('opacity-50', sizing.fallback)}>
                    {FallbackIcon && <FallbackIcon />}
                </div>
            )}
            {children}
        </div>
    )
}

export default Avatar
