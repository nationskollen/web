import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'

export type ImageSizes = 'small' | 'default' | 'large' | 'huge' | 'fill'

export interface ImageSizingData {
    container: string
    fallback: string
    spacing: string
}

export interface Props {
    src?: string | null
    size?: ImageSizes
    href?: string
    className?: string
    fallbackClassName?: string
    backgroundClassName?: string
    padding?: boolean
    fallbackIcon?: React.ElementType
    children?: React.ReactNode
}

const IMAGE_SIZES: Record<ImageSizes, ImageSizingData> = {
    fill: {
        container: 'w-full',
        fallback: '',
        spacing: '',
    },
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
    huge: {
        container: 'w-56 h-56',
        fallback: 'p-xlg',
        spacing: 'p-md',
    },
}

const CustomImage = ({
    src,
    size,
    padding,
    className,
    fallbackClassName,
    backgroundClassName,
    fallbackIcon: FallbackIcon,
    children,
}: Props) => {
    const sizing = IMAGE_SIZES[size || 'default']

    return (
        <div
            className={clsx(
                'rounded',
                backgroundClassName || 'bg-background-extra dark:bg-background-highlight',
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
                <div className={clsx('opacity-50', sizing.fallback, fallbackClassName)}>
                    {FallbackIcon && <FallbackIcon />}
                </div>
            )}
            {children}
        </div>
    )
}

export default CustomImage
