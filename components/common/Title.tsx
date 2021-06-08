import React from 'react'

export type TitleSizes = 'small' | 'default' | 'large'

export interface Props {
    text: string
    size?: TitleSizes
    className?: string
}

const TITLE_SIZES: Record<TitleSizes, string> = {
    small: 'text-lg font-bold',
    default: 'text-xl font-bold',
    large: 'text-3xl font-black',
}

const Title = ({ text, size, className }: Props) => {
    const sizing = size ? TITLE_SIZES[size] : TITLE_SIZES['default']
    const base = `text-text-highlight ${sizing}`
    const classes = className ? `${base} ${className}` : base

    if (!size || size === 'default') {
        return <h2 className={classes}>{text}</h2>
    }

    if (size === 'small') {
        return <h3 className={classes}>{text}</h3>
    }

    // Large
    return <h1 className={classes}>{text}</h1>
}

export default Title
