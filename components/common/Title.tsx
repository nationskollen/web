import React from 'react'
import { extend } from '@utils'

export type TitleSizes = 'small' | 'default' | 'large'

export interface Props extends React.BaseHTMLAttributes<HTMLHeadingElement> {
    text?: string
    size?: TitleSizes
    className?: string
}

const TITLE_SIZES: Record<TitleSizes, string> = {
    small: 'text-lg font-bold',
    default: 'text-xl font-bold',
    large: 'text-3xl font-black',
}

// Accept other base props for accessibility
const Title = ({ text, size, className, ...props }: Props) => {
    // Skip rendering if we have no text
    if (!text) {
        return null
    }

    const sizing = size ? TITLE_SIZES[size] : TITLE_SIZES['default']
    const classes = extend(sizing, className)

    if (!size || size === 'default') {
        return (
            <h2 className={classes} {...props}>
                {text}
            </h2>
        )
    }

    if (size === 'small') {
        return (
            <h3 className={classes} {...props}>
                {text}
            </h3>
        )
    }

    // Large
    return (
        <h1 className={classes} {...props}>
            {text}
        </h1>
    )
}

export default Title
