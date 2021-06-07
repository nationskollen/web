import React from 'react'
import { combine } from '@utils'

export type ButtonSizes = 'small' | 'default' | 'large'
export type ButtonTypes = 'primary' | 'secondary' | 'light' | 'transparent'

export interface Props {
    label?: string
    href?: string
    size?: ButtonSizes
    type?: ButtonTypes
    icon?: React.ReactElement
    iconLeft?: boolean
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    children?: Element | React.ReactElement | React.ReactElement[]
}

const BUTTON_STYLES: Record<ButtonTypes, string> = {
    primary: combine('bg-primary', 'text-white', 'hover:bg-primary-extra'),
    secondary: combine('bg-secondary', 'text-white', 'hover:bg-secondary-extra'),
    light: combine('bg-background-highlight', 'text-text-highlight'),
    transparent: combine('bg-transparent'),
}

const BUTTON_SIZES: Record<ButtonSizes, string> = {
    small: 'h-10 text-sm p-3 space-x-xsm',
    default: 'h-12 p-3 space-x-sm',
    large: 'h-14 text-lg p-4 space-x-2',
}

// We use forwarRef here so that our buttons can be used as children
// to Link components. The only requirement to make it work is to
// set passHref={true} on the Link.
const Button = React.forwardRef(
    ({ size, href, type, className, onClick, children }: Props, ref: any) => {
        const style = type ? BUTTON_STYLES[type] : BUTTON_STYLES['primary']
        const sizing = size ? BUTTON_SIZES[size] : BUTTON_SIZES['default']
        const base = `focus:ring-2 focus:outline-none rounded-sm font-bold ${style}`
        const classes = className ? `${base} ${className}` : base
        const content = (
            <div className={`flex flex-row items-center justify-center ${sizing}`}>{children}</div>
        )

        if (href) {
            return (
                <a className={classes} href={href} onClick={onClick} ref={ref}>
                    {content}
                </a>
            )
        }

        return (
            <button className={classes} onClick={onClick}>
                {content}
            </button>
        )
    }
)

export default Button
