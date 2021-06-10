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
import { Field, FieldProps, FieldInputProps } from 'formik'

export type InputSizes = 'small' | 'default' | 'large'
export type InputStyles = 'transparent' | 'no-border'
export type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'style'>

export interface Props extends NativeInputProps {
    size?: InputSizes
    label?: string
    style?: InputStyles
    inputClassName?: string
    containerClassName?: string
    children?: React.ReactElement | React.ReactElement[]
}

const INPUT_SIZES: Record<InputSizes, string> = {
    small: 'h-8 text-sm',
    default: 'h-12',
    large: 'h-14',
}

const INPUT_STYLES: Record<InputStyles, string> = {
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

const Input = ({
    id,
    size,
    type,
    style,
    label,
    className,
    inputClassName,
    containerClassName,
    children,
    onChange,
    ...props
}: Props) => {
    const sizing = size ? INPUT_SIZES[size] : INPUT_SIZES['default']
    const styling = style ? INPUT_STYLES[style] : INPUT_STYLES['transparent']
    const baseStyle = 'rounded-sm flex flex-col justify-center'
    const containerStyle = combine(
        'flex flex-row items-center rounded-sm focus-within:outline-default px-3',
        sizing,
        styling
    )
    const inputStyle = extend(
        'flex-1 h-full focus:outline-none bg-transparent text-text-highlight',
        inputClassName
    )

    const content = (fieldProps: FieldInputProps<any> | {}) => {
        return (
            <div className={extend(baseStyle, className)}>
                {label && (
                    <label className="text-sm mb-xsm text-text" htmlFor={id}>
                        {label}
                    </label>
                )}
                <div className={extend(containerStyle, containerClassName)}>
                    {children && <div className="h-2/5 pr-sm focus:outline-none">{children}</div>}
                    <input
                        id={id}
                        type={type}
                        className={extend(inputStyle, inputClassName)}
                        {...props}
                        {...fieldProps}
                    />
                </div>
            </div>
        )
    }

    // If we specify a custom onChange, we assume that Formik should not be used
    if (onChange) {
        return content({ onChange })
    }

    return (
        <Field name={id} id={id} type={type}>
            {({ field }: FieldProps) => content(field)}
        </Field>
    )
}

export default Input
