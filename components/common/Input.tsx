import React from 'react'

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

const Field = ({ type, placeholder, className, ...props }: FieldProps) => {
    const base = 'flex-1 h-full focus:outline-none bg-transparent text-text-highlight'
    const classes = className ? `${base} ${className}` : base

    return <input type={type} placeholder={placeholder} className={classes} {...props} />
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
