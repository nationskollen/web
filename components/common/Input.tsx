/**
 * Renders a generic input. To simplify the props, this uses a more
 * verbose definition. This also means that you have more freedom when
 * creating your inputs. There is currently only one style, but you
 * can modify the styling of each sub-component using `className`.
 *
 * Example usage:
 * ```typescript
 * <Input.Wrapper label="Email">
 *     <Input.Icon>
 *         <MailIcon />
 *     </Input.Icon>
 *     <Input.Field type="email" placeholder="din@email.se" required />
 * </Input.Wrapper>
 * ```
 *
 * The `Input.Icon` component accepts all props that a
 * regular input element accepts.
 *
 * @module Common
 */
import React, { useState, useCallback } from 'react'

export type InputSizes = 'small' | 'default' | 'large'
export type InputStyles = 'transparent'

export interface Props {
    size?: InputSizes
    style?: InputStyles
    label?: string
    className?: string
    children?: Element | React.ReactElement | React.ReactElement[]
}

export interface FieldProps {
    type: string
    placeholder?: string
    className?: string
    onChange?: (value: string | null) => void
    [key: string]: unknown
}

export interface IconProps {
    className?: string
    children?: Element | React.ReactElement | React.ReactElement[]
}

const INPUT_STYLES: Record<InputStyles, string> = {
    transparent:
        'bg-transparent text-text-extra focus-within:border-text focus-within:text-text-highlight',
}

const INPUT_SIZES: Record<InputSizes, string> = {
    small: 'h-8 text-sm',
    default: 'h-12',
    large: 'h-14',
}

const Wrapper = ({ size, style, label, className, children }: Props) => {
    const sizing = size ? INPUT_SIZES[size] : INPUT_SIZES['default']
    const styles = style ? INPUT_STYLES[style] : INPUT_STYLES['transparent']
    const base = 'focus:ring-2 flex flex-col justify-center'
    const classes = className ? `${base} ${className}` : base
    const baseInputClasses = `flex lex-row items-center rounded-sm focus:outline-none px-3 border-1 border-border-dark ${sizing} ${styles}`
    const inputClasses = className ? `${baseInputClasses} ${className}` : baseInputClasses

    return (
        <div className={classes}>
            {label && <label className="text-sm mb-xsm text-text">{label}</label>}
            <div className={inputClasses}>{children}</div>
        </div>
    )
}

const Field = ({ type, placeholder, className, onChange, ...props }: FieldProps) => {
    const base = 'flex-1 h-full focus:outline-none bg-transparent text-text-highlight'
    const classes = className ? `${base} ${className}` : base

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (!onChange) {
            return
        }

        const { value } = e.target
        onChange((!value || value === '') ? null : value)
    }, [onChange])

    return <input
        type={type}
        placeholder={placeholder}
        className={classes} {...props}
        onChange={handleChange}
    />
}

const Icon = ({ className, children }: IconProps) => {
    const base = 'h-2/5 pr-sm focus:outline-none'
    const classes = className ? `${base} ${className}` : base

    return <div className={classes}>{children}</div>
}

export default {
    Wrapper,
    Field,
    Icon,
}
