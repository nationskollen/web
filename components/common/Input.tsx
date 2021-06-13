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
import { DeepMap, FieldError } from 'react-hook-form'
import { ExclamationIcon } from '@heroicons/react/outline'
import { extend, combine, combineNoCache, getFieldErrorMessage } from '@utils'

import InputError from '@common/InputError'
import LoadingIndicator from '@common/LoadingIndicator'

export type FormRef = React.Ref<unknown>
export type InputSizes = 'small' | 'default' | 'large' | 'auto'
export type InputStyles = 'transparent' | 'no-border'
export type InputFocusStyles = InputStyles | 'error'

export type NativeInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    'size' | 'style'
>

export interface Props extends NativeInputProps {
    as?: React.ElementType
    size?: InputSizes
    label?: string
    style?: InputStyles
    loading?: boolean
    error?: FieldError | boolean | DeepMap<Blob | undefined, FieldError>
    inputClassName?: string
    containerClassName?: string
    hideErrorIcon?: boolean
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
    'transparent': combineNoCache(
        'bg-transparent text-text-extra border-1 border-border-dark',
        'dark:bg-background-highlight dark:border-background-highlight'
    ),
    'no-border': combineNoCache(
        'bg-transparent text',
        'focus-within:border-text focus-within:text-text-highlight'
    ),
}

export const INPUT_FOCUS_STYLES: Record<InputFocusStyles, string> = {
    transparent: combineNoCache(
        'focus-within:ring focus-within:ring-focus-input',
        'focus-within:text-text-highlight focus-within:border-transparent',
    ),
    'no-border': combineNoCache(
        'focus-within:ring focus-within:ring-focus-input',
        'focus-within:border-text focus-within:text-text-highlight',
    ),
    error: combineNoCache(
        'border-error',
        'focus-within:ring focus-within:ring-focus-error',
        'focus-within:border-error focus-within:text-error focus:within:ring-error',
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
            loading,
            error,
            hideErrorIcon,
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
        const focusStyle = error ? INPUT_FOCUS_STYLES['error'] : INPUT_FOCUS_STYLES[style || 'transparent']
        const baseStyle = 'relative rounded-sm flex flex-col justify-center'
        const containerStyle = combine(
            'flex flex-row items-center rounded-sm px-3',
            sizing,
            styling,
            focusStyle,
        )
        const inputStyle =
            'flex-1 h-full w-full focus:outline-none bg-transparent text-text-highlight'
        const InputComponent = React.forwardRef((props: NativeInputProps, ref: FormRef) =>
            React.createElement(as || 'input', { ref, ...props })
        )

        const title = getFieldErrorMessage(error)

        return (
            <div className={extend(baseStyle, className)}>
                {label && (
                    <label
                        className={combine(
                            'text-sm mb-xsm',
                            error ? 'text-error font-bold' : 'text-text'
                        )}
                        htmlFor={id}
                    >
                        {label}
                    </label>
                )}
                <div className={extend(containerStyle, containerClassName)}>
                    {(children || loading) && (
                        <div className="pr-sm h-2/5 focus:outline-none">
                            {loading ? <LoadingIndicator /> : children}
                        </div>
                    )}
                    {InnerComponent && <InnerComponent />}
                    <InputComponent
                        id={id}
                        ref={ref}
                        type={type}
                        className={extend(inputStyle, inputClassName)}
                        title={title}
                        aria-invalid={!!error}
                        {...props}
                    />
                    {(error && !hideErrorIcon) && (
                        <div className="w-auto h-full p-3 pr-0">
                            <div className="h-full rounded space-x-xsm bg-error-highlight p-xsm text-error-highlight-text">
                                <ExclamationIcon />
                            </div>
                        </div>
                    )}
                </div>
                <InputError title={title} />
            </div>
        )
    }
)

export default Input
