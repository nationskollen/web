/**
 * Renders a generic button. Supports links and can be used
 * together with Next.JS Link component by setting the `passHref` prop:
 *
 * ```typescript
 * <Link href="/.." passHref={true}>
 *     // This button will be rendered as a regular <a> tag
 *     <Button style="primary" />
 * </Link>
 * ```
 *
 * Additional styling can be done by specifying custom classes to
 * the `className` prop. Any icon that is rendered as a child-element
 * will have appropriate sizing based on the button height.
 *
 * Example usage:
 * ```typescript
 * <Button style="secondary">
 *     <span>Button label</span>
 *     <LockIcon />
 * </Button>
 * ```
 *
 * @module Common
 */
import React from 'react'

export type ButtonRadius = 'default' | 'large'
export type ButtonSizes = 'small' | 'medium' | 'default' | 'large' | 'icon'

export type ButtonFocusStyles = 'primary' | 'default' | 'subtle'

export type ButtonStyles =
    | 'primary'
    | 'primary-extra'
    | 'secondary'
    | 'light'
    | 'transparent'
    | 'error'
    | 'success'

export interface Props {
    href?: string
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
    focus?: ButtonFocusStyles
    size?: ButtonSizes
    radius?: ButtonRadius
    style?: ButtonStyles
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    children?: React.ReactNode
    [key: string]: unknown
}

const BUTTON_STYLES: Record<ButtonStyles, string> = {
    'primary':
        'bg-primary text-white hover:bg-primary-extra dark:filter dark:brightness-125 focus:ring-focus-primary',
    'primary-extra': 'bg-primary-extra text-white focus:ring-focus-primary',
    'secondary': 'bg-secondary text-white hover:bg-secondary-extra focus:ring-focus-secondary',
    'light':
        'bg-background-extra dark:bg-background-highlight text-text-highlight border-1 border-border-dark dark:border-background-highlight focus:ring-focus-default',
    'transparent': 'bg-transparent focus:ring-focus-default',
    'error': 'bg-error text-white hover:filter hover:brightness-125 focus:ring-focus-error',
    'success': 'bg-success text-white hover:filter hover:brightness-125 focus:ring-focus-success',
}

const BUTTON_FOCUS_STYLES: Record<ButtonFocusStyles, string> = {
    primary: 'focus:ring focus:ring-focus-primary',
    default: 'focus:ring focus:ring-focus-default',
    subtle: 'focus:bg-background-extra dark:focus:bg-background-highlight focus:text-primary-text',
}

const BUTTON_RADIUS: Record<ButtonRadius, string> = {
    default: 'rounded-sm',
    large: 'rounded',
}

const BUTTON_SIZES: Record<ButtonSizes, string> = {
    small: 'h-10 text-sm p-3 space-x-xsm',
    medium: 'h-10 p-3 px-4 text-md space-x-xsm',
    default: 'h-12 p-3 space-x-sm',
    large: 'h-14 text-lg p-4 space-x-2',
    icon: 'h-8 w-8 p-1',
}

// We use forwarRef here so that our buttons can be used as children
// to Link components. The only requirement to make it work is to
// set passHref={true} on the Link.
const Button = React.forwardRef(
    (
        { size, focus, type, href, style, radius, className, onClick, children, ...props }: Props,
        ref: any
    ) => {
        const sizing = size ? BUTTON_SIZES[size] : BUTTON_SIZES['default']
        const radiusStyle = radius ? BUTTON_RADIUS[radius] : BUTTON_RADIUS['default']
        const colorStyle = style ? BUTTON_STYLES[style] : BUTTON_STYLES['primary']
        const focusStyle = focus ? BUTTON_FOCUS_STYLES[focus] : ''
        const base = `focus:ring focus:outline-none font-bold ${colorStyle} ${focusStyle} ${radiusStyle}`
        const classes = className ? `${base} ${className}` : base
        const content = (
            <div className={`flex flex-row items-center justify-center ${sizing}`}>{children}</div>
        )

        if (href) {
            return (
                <a className={classes} href={href} onClick={onClick} ref={ref} {...props}>
                    {content}
                </a>
            )
        }

        return (
            <button
                className={classes}
                onClick={onClick}
                type={type || 'button'}
                ref={ref}
                {...props}
            >
                {content}
            </button>
        )
    }
)

export default Button
