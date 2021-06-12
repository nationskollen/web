/**
 * Renders a generic input.
 *
 * Example usage:
 * ```typescript
 * <Input id="email" label="Email" placeholder="email@email.com" type="email" required>
 *     <MailIcon />
 * </Input>
 * ```
 *
 * Example usage with react-hook-form:
 * ```typescript
 * <Input label="Email" placeholder="email@email.com" type="email" {...register('email', { required: true }}>
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
import { extend, combine, combineNoCache } from '@utils'

export type FormRef = React.Ref<unknown>
export type InputSizes = 'small' | 'default' | 'large' | 'auto'
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
    innerComponent?: React.ElementType
    children?: React.ReactNode
}

export const INPUT_SIZES: Record<InputSizes, string> = {
    small: 'h-8 text-sm',
    default: 'h-12',
    large: 'h-14',
    auto: 'h-auto',
}

export const INPUT_STYLES: Record<InputStyles, string> = {
    transparent: combineNoCache(
        'bg-transparent text-text-extra border-1 border-border-dark',
        'focus-within:text-text-highlight focus-within:border-transparent',
        'dark:bg-background-highlight dark:border-background-highlight',
    ),
    'no-border': combineNoCache(
        'bg-transparent text focus-within:border-text',
        'focus-within:text-text-highlight',
    ),
}

const Input = React.forwardRef(
    (
        {
            id,
            as,
            size,
            type,
            style,
            label,
            className,
            inputClassName,
            containerClassName,
            innerComponent: InnerComponent,
            children,
            ...props
        }: Props,
        ref: FormRef
    ) => {
        const sizing = size ? INPUT_SIZES[size] : INPUT_SIZES['default']
        const styling = style ? INPUT_STYLES[style] : INPUT_STYLES['transparent']
        const baseStyle = 'rounded-sm flex flex-col justify-center'
        const containerStyle = combine(
            'flex flex-row items-center rounded-sm focus-within:ring focus-within:ring-focus-input px-3',
            sizing,
            styling
        )
        const inputStyle = 'flex-1 h-full w-full focus:outline-none bg-transparent text-text-highlight'
        const InputComponent = React.forwardRef((props: NativeInputProps, ref: FormRef) =>
            React.createElement(as || 'input', { ref, ...props })
        )

        return (
            <div className={extend(baseStyle, className)}>
                {label && (
                    <label className="text-sm mb-xsm text-text" htmlFor={id}>
                        {label}
                    </label>
                )}
                <div className={extend(containerStyle, containerClassName)}>
                    {children && <div className="h-2/5 pr-sm focus:outline-none">{children}</div>}
                    {InnerComponent && <InnerComponent />}
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
    }
)

export default Input
