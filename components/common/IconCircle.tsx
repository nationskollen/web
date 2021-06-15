import React from 'react'
import { combine } from '@utils'

export type IconCircleSizes = 'small' | 'default' | 'large'
export type IconCircleStyles = 'error' | 'success' | 'primary' | 'secondary' | 'highlight'

export interface Props {
    icon: React.ElementType
    size?: IconCircleSizes
    style?: IconCircleStyles
}

const ICON_CIRCLE_SIZES: Record<IconCircleSizes, string> = {
    small: 'h-8 w-8 p-xsm',
    default: 'h-10 w-10 p-sm',
    large: 'h-14 w-14 p-md',
}

const ICON_CIRCLE_STYLES: Record<IconCircleStyles, string> = {
    error: 'bg-error-highlight text-error-highlight-text',
    success: 'bg-success-highlight text-success-highlight-text',
    primary: 'bg-primary-highlight text-primary dark:bg-primary-dark dark:text-primary-highlight',
    secondary: 'bg-secondary-highlight-text text-secondary-extra',
    highlight: 'bg-background-highlight text-text-extra',
}

const IconCircle = ({ size, style, icon: Icon }: Props) => {
    const sizing = size ? ICON_CIRCLE_SIZES[size] : ICON_CIRCLE_SIZES['default']
    const colors = style ? ICON_CIRCLE_STYLES[style] : ICON_CIRCLE_STYLES['primary']

    return (
        <div className={combine('rounded-full', sizing, colors)}>
            <Icon />
        </div>
    )
}

export default IconCircle
