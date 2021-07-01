import clsx from 'clsx'
import React from 'react'

export type TitleStyles = 'default' | 'uppercase'
export type TitleSizes = 'tiny' | 'small' | 'default' | 'medium' | 'large'

export interface Props extends Omit<React.BaseHTMLAttributes<HTMLHeadingElement>, 'style'> {
    text?: string
    size?: TitleSizes
    style?: TitleStyles
    className?: string
}

const TITLE_SIZES: Record<TitleSizes, string> = {
    tiny: 'text-default font-bold',
    small: 'text-lg font-bold',
    default: 'text-xl font-bold',
    medium: 'text-2xl font-bold',
    large: 'text-3xl font-black',
}

const TITLE_STYLES: Record<TitleStyles, string> = {
    default: '',
    uppercase: '!font-black uppercase text-xsm'
}

// Accept other base props for accessibility
const Title = ({ text, size, style, className, ...props }: Props) => {
    // Skip rendering if we have no text
    if (!text) {
        return null
    }

    const sizing = TITLE_SIZES[size || 'default']
    const styling = TITLE_STYLES[style || 'default']
    const classes = clsx('text-text-highlight', sizing, styling, className)

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

    if (size === 'tiny') {
        <h4 className={classes} {...props}>
            {text}
        </h4>
    }

    // Large
    return (
        <h1 className={classes} {...props}>
            {text}
        </h1>
    )
}

export default Title
