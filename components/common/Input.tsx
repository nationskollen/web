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
 * Note that if you want to use this component in a form,
 * you **must** wrap your form in the `FormProvider` component
 * from react-hook-form.
 *
 * Any child component passed into this component will be rendered to the left
 * of the input field. The main purpose of this is to allow custom (optional) icons.
 *
 * @module Common
 */
import clsx from 'clsx'
import React from 'react'
import useConstant from 'use-constant'
import { useFormContext } from 'react-hook-form'
import { ExclamationIcon } from '@heroicons/react/outline'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

import { getFieldErrorMessage } from '@utils'
import { DEFAULT_DEBOUNCE_DELAY } from '@constants'

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
    inputClassName?: string
    containerClassName?: string
    error?: boolean | string
    hideErrorIcon?: boolean
    innerComponent?: React.ElementType
    debounce?: boolean
    debounceDelay?: number
    noPadding?: boolean
    children?: React.ReactNode
}

export const INPUT_SIZES: Record<InputSizes, string> = {
    small: 'h-8 text-sm',
    default: 'h-12',
    large: 'h-14',
    auto: 'h-auto',
}

export const INPUT_STYLES: Record<InputStyles, string> = {
    'transparent': clsx(
        'bg-transparent text-text-extra border-1 border-border-dark',
        'dark:bg-background-highlight dark:border-background-highlight'
    ),
    'no-border': clsx(
        'bg-transparent text',
        'focus-within:border-text focus-within:text-text-highlight'
    ),
}

export const INPUT_FOCUS_STYLES: Record<InputFocusStyles, string> = {
    'transparent': clsx(
        'focus-within:ring focus-within:ring-focus-input',
        'focus-within:text-text-highlight focus-within:border-transparent'
    ),
    'no-border': clsx(
        'focus-within:ring focus-within:ring-focus-input',
        'focus-within:border-text focus-within:text-text-highlight'
    ),
    'error': clsx(
        'border-error',
        'focus-within:ring focus-within:ring-focus-error',
        'focus-within:border-error focus-within:text-error-text focus:within:ring-error'
    ),
}

const NativeInput = React.forwardRef((props: NativeInputProps, ref: React.Ref<any>) => {
    return <input ref={ref} {...props} />
})

const Input = React.forwardRef(
    (
        {
            id,
            as,
            size,
            name,
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
            debounce,
            debounceDelay,
            onChange,
            children,
            noPadding,
            ...props
        }: Props,
        ref: FormRef
    ) => {
        const form = useFormContext()
        const inputError = error || (form && name && form.formState.errors[name])

        const sizing = INPUT_SIZES[size || 'default']
        const styling = INPUT_STYLES[style || 'transparent']
        const focusStyle = INPUT_FOCUS_STYLES[inputError ? 'error' : style || 'transparent']
        const title = getFieldErrorMessage(inputError)

        const onChangeCallback =
            onChange && debounce
                ? useConstant(() =>
                      AwesomeDebouncePromise(onChange, debounceDelay || DEFAULT_DEBOUNCE_DELAY)
                  )
                : onChange

        // It is important that we define `NativeInput` as a separate component.
        // If not, React will not be able to efficiently render it. Some bugs will
        // also occur. For example, filtering in tables will not work at all becuause
        // of the state constantly being reset.
        const InputComponent = as || NativeInput

        return (
            <div className={clsx('relative rounded-sm flex flex-col justify-start', className)}>
                {label && (
                    <label
                        htmlFor={id}
                        className={clsx(
                            'text-sm mb-xsm',
                            inputError ? 'text-error-text font-bold' : 'text-text'
                        )}
                    >
                        {label}
                    </label>
                )}
                <div
                    className={clsx(
                        'flex flex-row items-center rounded-sm shadow',
                        noPadding ? 'px-0' : 'px-3',
                        sizing,
                        styling,
                        focusStyle,
                        containerClassName
                    )}
                >
                    {(children || loading) && (
                        <div className="pr-sm h-2/5 focus:outline-none">
                            {loading ? <LoadingIndicator /> : children}
                        </div>
                    )}
                    {InnerComponent && <InnerComponent />}
                    <InputComponent
                        id={id}
                        ref={ref}
                        name={name}
                        type={type}
                        className={clsx(
                            'flex-1 h-full w-full focus:outline-none',
                            'bg-transparent text-text-highlight',
                            inputClassName
                        )}
                        title={title}
                        aria-invalid={!!inputError}
                        onChange={onChangeCallback}
                        {...props}
                    />
                    {inputError && !hideErrorIcon && (
                        <div className="w-auto h-full p-3 pr-0">
                            <div
                                className={clsx(
                                    'h-full rounded space-x-xsm bg-error-highlight',
                                    'p-xsm text-error-highlight-text'
                                )}
                            >
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
