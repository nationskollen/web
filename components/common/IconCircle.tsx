import clsx from 'clsx'
import React from 'react'

export type IconCircleSizes = 'small' | 'default' | 'large'
export type IconCircleStyles = 'error' | 'success' | 'primary' | 'secondary' | 'highlight' | 'light'

export interface Props {
    icon: React.ElementType
    size?: IconCircleSizes
    style?: IconCircleStyles
}

const ICON_CIRCLE_SIZES: Record<IconCircleSizes, string> = {
    small: 'h-9 w-9 p-sm',
    default: 'h-10 w-10 p-sm',
    large: 'h-14 w-14 p-md',
}

const ICON_CIRCLE_STYLES: Record<IconCircleStyles, string> = {
    error: 'bg-error-highlight text-error-highlight-text',
    success: 'bg-success-highlight text-success-highlight-text',
    primary: 'bg-primary-highlight text-primary dark:bg-primary-dark dark:text-primary-highlight',
    secondary: 'bg-secondary-highlight-text text-secondary-extra',
    highlight: 'bg-background-highlight text-text-extra',
    light: 'bg-background-extra text-primary dark:bg-background dark:text-primary-text',
}

const IconCircle = ({ size, style, icon: Icon }: Props) => {
    const sizing = ICON_CIRCLE_SIZES[size || 'default']
    const colors = ICON_CIRCLE_STYLES[style || 'light']

    return (
        <div className={clsx('rounded-full', sizing, colors)}>
            <Icon />
        </div>
    )
}

export default IconCircle
