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
import { FieldError } from 'react-hook-form'
import { extend, combineNoCache, getFieldErrorMessage } from '@utils'

import { INPUT_FOCUS_STYLES } from '@common/Input'
import LoadingIndicator from '@common/LoadingIndicator'

export type ButtonRadius = 'default' | 'large'
export type ButtonSizes = 'small' | 'medium' | 'default' | 'large' | 'icon'
export type ButtonFocusStyles = 'primary' | 'default' | 'subtle' | 'error' | 'input'

export type ButtonStyles =
    | 'primary'
    | 'primary-extra'
    | 'secondary'
    | 'light'
    | 'transparent'
    | 'error'
    | 'success'
    | 'input'

export interface Props {
    href?: string
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
    focus?: ButtonFocusStyles
    size?: ButtonSizes
    radius?: ButtonRadius
    style?: ButtonStyles
    loading?: boolean
    error?: boolean | FieldError
    className?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    children?: React.ReactNode
    [key: string]: unknown
}

const BUTTON_STYLES: Record<ButtonStyles, string> = {
    'primary': combineNoCache(
        'bg-primary text-white',
        'dark:filter dark:brightness-125',
        'focus:ring-focus-primary hover:bg-primary-extra'
    ),
    'primary-extra': combineNoCache('bg-primary-extra text-white', 'focus:ring-focus-primary'),
    'secondary': combineNoCache(
        'bg-secondary text-white',
        'hover:bg-secondary-extra focus:ring-focus-secondary'
    ),
    'light': combineNoCache(
        'bg-background-extra text-text-highlight border-1 border-border-dark',
        'dark:bg-background-highlight dark:border-background-highlight',
        'focus:ring-focus-default'
    ),
    'transparent': combineNoCache('bg-transparent', 'focus:ring-focus-default'),
    'error': combineNoCache(
        'bg-error text-white',
        'hover:filter hover:brightness-125 focus:ring-focus-error'
    ),
    'success': combineNoCache(
        'bg-success text-white',
        'hover:filter hover:brightness-125 focus:ring-focus-success'
    ),
    'input': combineNoCache(
        'bg-transparent text-text-highlight border-1 border-border-dark',
        'dark:bg-background-highlight dark:border-0'
    ),
}

const BUTTON_FOCUS_STYLES: Record<ButtonFocusStyles, string> = {
    primary: combineNoCache('focus:ring-focus-primary'),
    default: combineNoCache('focus:ring-focus-default'),
    subtle: combineNoCache(
        'dark:focus:bg-background-highlight',
        'focus:bg-background-extra focus:text-primary-text'
    ),
    input: combineNoCache('focus:ring-focus-input'),
    error: combineNoCache('text-error-text', INPUT_FOCUS_STYLES['error']),
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
    icon: 'h-9 w-9 p-sm',
}

// We use forwarRef here so that our buttons can be used as children
// to Link components. The only requirement to make it work is to
// set passHref={true} on the Link.
const Button = React.forwardRef(
    (
        {
            size,
            focus,
            type,
            href,
            style,
            radius,
            loading,
            error,
            className,
            onClick,
            children,
            ...props
        }: Props,
        ref: any
    ) => {
        const sizing = size ? BUTTON_SIZES[size] : BUTTON_SIZES['default']
        const radiusStyle = radius ? BUTTON_RADIUS[radius] : BUTTON_RADIUS['default']
        const colorStyle = style ? BUTTON_STYLES[style] : BUTTON_STYLES['primary']
        let focusStyle = ''

        // Update focus style based on props
        if (error) {
            focusStyle = BUTTON_FOCUS_STYLES['error']
        } else if (focus) {
            focusStyle = BUTTON_FOCUS_STYLES[focus]
        } else if (style === 'input') {
            focusStyle = BUTTON_FOCUS_STYLES['input']
        }

        const base = `focus:ring focus:outline-none font-bold ${colorStyle} ${focusStyle} ${radiusStyle}`
        const content = (
            <div className={`flex flex-row items-center justify-center ${sizing}`}>
                {loading ? <LoadingIndicator /> : children}
            </div>
        )

        const title = getFieldErrorMessage(error)

        if (href) {
            return (
                <a
                    className={extend(base, className)}
                    href={href}
                    onClick={onClick}
                    ref={ref}
                    {...props}
                >
                    {content}
                </a>
            )
        }

        return (
            <button
                className={extend(base, className)}
                onClick={onClick}
                type={type || 'button'}
                title={title}
                ref={ref}
                {...props}
            >
                {content}
            </button>
        )
    }
)

export default Button
