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
import clsx from 'clsx'
import React from 'react'
import { FieldError } from 'react-hook-form'
import { getFieldErrorMessage } from '@utils'

import { INPUT_FOCUS_STYLES } from '@common/Input'
import LoadingIndicator from '@common/LoadingIndicator'

export type ButtonDirections = 'row' | 'column'
export type ButtonRadius = 'default' | 'large' | 'round'
export type ButtonSizes = 'small' | 'medium' | 'default' | 'large' | 'icon' | 'icon-small' | 'auto'
export type ButtonFocusStyles = 'primary' | 'default' | 'subtle' | 'error' | 'input'

export type ButtonStyles =
    | 'primary'
    | 'primary-extra'
    | 'secondary'
    | 'light'
    | 'lighter'
    | 'transparent'
    | 'error'
    | 'error-border'
    | 'success'
    | 'input'
    | 'border'

export type NativeButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    'size' | 'style' | 'onClick'
>

export interface Props extends NativeButtonProps {
    href?: string
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
    focus?: ButtonFocusStyles
    size?: ButtonSizes
    radius?: ButtonRadius
    style?: ButtonStyles
    leftAlignContent?: boolean
    loading?: boolean
    direction?: ButtonDirections
    error?: boolean | FieldError
    className?: string
    containerClassName?: string
    onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
    children?: React.ReactNode
}

const BUTTON_STYLES: Record<ButtonStyles, string> = {
    'primary': clsx('bg-primary text-white', 'focus:ring-focus-primary hover:bg-primary-extra'),
    'primary-extra': clsx('bg-primary-extra text-white', 'focus:ring-focus-primary'),
    'secondary': clsx(
        'bg-secondary text-white',
        'hover:bg-secondary-extra focus:ring-focus-secondary'
    ),
    'light': clsx(
        'bg-background-extra border-1 border-border-dark text-text-highlight',
        'dark:bg-background-highlight dark:border-background-highlight',
        'focus:ring-focus-default hover:bg-border',
    ),
    'lighter': clsx(
        'bg-transparent text-text-highlight focus:ring-focus-default',
        'hover:bg-hover'
    ),
    'transparent': clsx('bg-transparent', 'focus:ring-focus-default'),
    'error': clsx(
        'bg-error text-white',
        'hover:filter hover:brightness-125 focus:ring-focus-error'
    ),
    'error-border': clsx(
        'bg-transparent text-error-highlight-text border-1 border-border-dark',
        'hover:border-error-highlight hover:bg-error-highlight',
        'focus:ring-focus-error',
    ),
    'success': clsx(
        'bg-success text-white',
        'hover:filter hover:brightness-125 focus:ring-focus-success'
    ),
    'input': clsx(
        'bg-transparent text-text-highlight border-1 border-border-dark',
        'dark:bg-background-highlight dark:border-0'
    ),
    'border': clsx(
        'bg-transparent text-text border-1 border-border-dark',
        'hover:text-text-highlight hover:border-border-dark'
    ),
}

const BUTTON_FOCUS_STYLES: Record<ButtonFocusStyles, string> = {
    primary: clsx('focus:ring-focus-primary'),
    default: clsx('focus:ring-focus-default'),
    subtle: clsx(
        'dark:focus:bg-background-highlight',
        'focus:bg-background-extra focus:text-primary-text'
    ),
    input: clsx('focus:ring-focus-input'),
    error: clsx('text-error-text', INPUT_FOCUS_STYLES['error']),
}

const BUTTON_RADIUS: Record<ButtonRadius, string> = {
    default: 'rounded-sm',
    large: 'rounded',
    round: 'rounded-full'
}

const BUTTON_SIZES: Record<ButtonSizes, string> = {
    'small': 'h-10 text-sm p-3 space-x-xsm',
    'medium': 'h-10 p-3 px-4 text-md space-x-xsm',
    'default': 'h-12 p-3 px-md space-x-sm',
    'large': 'h-14 text-lg p-4 space-x-2',
    'icon': 'h-12 w-12 p-3',
    'icon-small': 'h-10 w-10 p-2',
    'auto': 'h-auto px-md py-3 space-x-sm',
}

// We use forwardRef here so that our buttons can be used as children
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
            direction,
            leftAlignContent,
            radius,
            loading,
            error,
            className,
            containerClassName,
            onClick,
            children,
            ...props
        }: Props,
        ref: any
    ) => {
        const sizing = BUTTON_SIZES[direction === 'column' ? 'auto' : size || 'default']
        const radiusStyle = BUTTON_RADIUS[radius || 'default']
        const colorStyle = BUTTON_STYLES[style || 'primary']
        let focusStyle = ''

        // Update focus style based on props
        if (error) {
            focusStyle = BUTTON_FOCUS_STYLES['error']
        } else if (focus) {
            focusStyle = BUTTON_FOCUS_STYLES[focus]
        } else if (style === 'input') {
            focusStyle = BUTTON_FOCUS_STYLES['input']
        }

        const classes = clsx(
            'focus:ring focus:outline-none font-bold',
            'transition-colors duration-out',
            colorStyle,
            focusStyle,
            radiusStyle,
            className
        )

        const title = getFieldErrorMessage(error)
        const content = (
            <div
                className={clsx(
                    'overflow-hidden relative flex flex-row items-center',
                    leftAlignContent ? 'justify-start' : 'justify-center',
                    direction === 'column' ? 'flex-col space-y-sm' : 'flex-row',
                    sizing,
                    containerClassName
                )}
            >
                {children}
                {loading && (
                    <div
                        className={clsx(
                            'absolute w-full right-0 top-0 ml-0 box-border',
                            'flex justify-center items-center',
                            colorStyle,
                            sizing,
                            radiusStyle
                        )}
                    >
                        <LoadingIndicator />
                    </div>
                )}
            </div>
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
