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

export type ButtonSizes = 'small' | 'default' | 'large'
export type ButtonTypes = 'primary' | 'secondary' | 'light' | 'transparent'

export interface Props {
    href?: string
    size?: ButtonSizes
    style?: ButtonTypes
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    children?: Element | React.ReactElement | React.ReactElement[]
}

const BUTTON_STYLES: Record<ButtonTypes, string> = {
    primary: 'bg-primary text-white hover:bg-primary-extra',
    secondary: 'bg-secondary text-white hover:bg-secondary-extra',
    light: 'bg-background-highlight text-text-highlight',
    transparent: 'bg-transparent',
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
    ({ size, href, style, className, onClick, children }: Props, ref: any) => {
        const styles = style ? BUTTON_STYLES[style] : BUTTON_STYLES['primary']
        const sizing = size ? BUTTON_SIZES[size] : BUTTON_SIZES['default']
        const base = `focus:ring-2 focus:outline-none rounded-sm font-bold ${styles}`
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
