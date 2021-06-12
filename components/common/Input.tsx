/**
 * Renders a generic input. If no `onChange` handler is specified,
 * it is assumed that you will be using Formik and will therefore
 * require you to have wrapped the input(s) in a Formik form.
 *
 * If you do not wish to use Formik, you **must** set `onChange`
 * to a valid callback function.
 *
 * Example usage:
 * ```typescript
 * <Input id="email" label="Email" placeholder="email@email.com" type="email" required>
 *     <MailIcon />
 * </Input>
 * ```
 *
 * Any child component passed into this component will be rendered to the left
 * of the input field. The main purpose of this is to allow custom (optional) icons.
 *
 * @module Common
 */
import React from 'react'
import { extend, combine } from '@utils'

export type FormRef = React.Ref<HTMLInputElement | HTMLTextAreaElement>
export type InputSizes = 'small' | 'default' | 'large' | 'textarea'
export type InputStyles = 'transparent' | 'no-border'
export type NativeInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    'size' | 'style'
>

export interface Props extends NativeInputProps {
    as?: React.ElementType
    size?: InputSizes
    label?: string
    style?: InputStyles
    inputClassName?: string
    containerClassName?: string
    children?: React.ReactNode
}

export const INPUT_SIZES: Record<InputSizes, string> = {
    small: 'h-8 text-sm',
    default: 'h-12',
    large: 'h-14',
    textarea: 'h-auto',
}

export const INPUT_STYLES: Record<InputStyles, string> = {
    'transparent': [
        'bg-transparent text-text-extra border-1 border-border-dark',
        'focus-within:text-text-highlight focus-within:border-transparent',
        'dark:bg-background-highlight dark:border-background-highlight',
    ].join(' '),
    'no-border': [
        'bg-transparent text focus-within:border-text',
        'focus-within:text-text-highlight',
    ].join(' '),
}

const Input = React.forwardRef(({
    id,
    as,
    size,
    type,
    style,
    label,
    className,
    inputClassName,
    containerClassName,
    children,
    ...props
}: Props, ref: FormRef) => {
    const sizing = size ? INPUT_SIZES[size] : INPUT_SIZES['default']
    const styling = style ? INPUT_STYLES[style] : INPUT_STYLES['transparent']
    const baseStyle = 'rounded-sm flex flex-col justify-center'
    const containerStyle = combine(
        'flex flex-row items-center rounded-sm focus-within:ring focus-within:ring-focus-input px-3',
        sizing,
        styling
    )
    const inputStyle = extend(
        'flex-1 h-full w-full focus:outline-none bg-transparent text-text-highlight',
        inputClassName
    )

    const InputComponent = React.forwardRef((props: NativeInputProps, ref: FormRef) => (
        React.createElement(as || 'input', { ref, ...props })
    ))

    return (
        <div className={extend(baseStyle, className)}>
            {label && (
                <label className="text-sm mb-xsm text-text" htmlFor={id}>
                    {label}
                </label>
            )}
            <div className={extend(containerStyle, containerClassName)}>
                {children && <div className="h-2/5 pr-sm focus:outline-none">{children}</div>}
                <InputComponent
                    id={id}
                    ref={ref}
                    type={type}
                    className={extend(inputStyle, inputClassName)}
                    {...props}
                />
            </div>
        </div>
    )
})

export default Input
