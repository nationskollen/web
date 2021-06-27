/**
 * Renders a generic select component.
 *
 * This component also has support for async data.
 * All you have to do is to set options to undefined or []
 * and populate it whenever the async data is received.
 *
 * Example usage:
 * ```typescript
 * <Select
 *     label="Kategori"
 *     buttonIcon={CollectionIcon}
 *     options={[
 *         { id: 'breakfast', value: 'Breakfast' },
 *         { id: 'lunch', value: 'Lunch' },
 *     ]}
 *     onSelect={(value) => console.log(value)}
 * />
 * ```
 *
 * Example usage react-hook-form:
 * ```typescript
 * <Select
 *     label="Kategori"
 *     buttonIcon={CollectionIcon}
 *     options={[
 *         { id: 'breakfast', value: 'Breakfast' },
 *         { id: 'lunch', value: 'Lunch' },
 *     ]}
 *     {...register('category')}
 * />
 * ```
 *
 * Note that if you want to use this component in a form,
 * you **must** wrap your form in the `FormProvider` component
 * from react-hook-form.
 *
 * @module Common
 */
import clsx from 'clsx'
import React, { useState, useMemo, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { SelectorIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'

import { getFieldErrorMessage } from '@utils'

import Card from '@common/Card'
import Button from '@common/Button'
import InputError from '@common/InputError'
import SelectOption from '@common/SelectOption'
import LoadingIndicator from '@common/LoadingIndicator'

export type NativeSelectProps = Omit<React.SelectHTMLAttributes<HTMLUListElement>, 'size' | 'style'>
export type OptionItemIdType = number | string

export interface OptionItem {
    id: OptionItemIdType
    value: string
    disabled?: boolean
    icon?: React.ElementType
}

export interface Props extends Omit<NativeSelectProps, 'onSelect'> {
    label: string
    initialSelection?: OptionItemIdType
    initialOptions?: Array<OptionItem>
    options: Array<OptionItem>
    loading?: boolean
    onSelect?: (option: OptionItem) => void
    buttonIcon?: React.ElementType
    buttonIconClassName?: string
}

const Select = React.forwardRef(
    (
        {
            id,
            label,
            options,
            loading,
            initialSelection,
            initialOptions,
            buttonIcon,
            buttonIconClassName,
            name,
            onSelect,
            ...props
        }: Props,
        ref: React.Ref<any>
    ) => {
        const form = useFormContext()
        const concatinatedOptions = useMemo(() => {
            if (!initialOptions) {
                return options
            }

            return initialOptions.concat(options)
        }, [options, initialOptions])

        const [selected, setSelected] = useState(
            initialSelection !== undefined
                ? concatinatedOptions.findIndex((item) => item.id === initialSelection)
                : undefined
        )

        // Make sure to set the initial value in the form
        // even if the user does not modify the selected value.
        useEffect(() => {
            if (form && name) {
                // If we have specified `initialSelection`, we want to make
                // sure to set this initial value in the form as well.
                if (selected !== undefined) {
                    runCallbacks(selected)
                    return
                }

                const savedValue = form.getValues(name)

                if (savedValue) {
                    // The form state will contain the actual option item, not the index.
                    // Therefore, we must calculate the index based on the selected option item.
                    const index = concatinatedOptions.findIndex(
                        (option) => option.id === savedValue.id
                    )

                    if (index !== -1) {
                        setSelected(index)
                    }
                }
            } else if (selected !== undefined) {
                runCallbacks(selected)
            }
        }, [])

        // Runs all the registered callbacks when changing selected value
        const runCallbacks = (index: number) => {
            onSelect && onSelect(concatinatedOptions[index])

            if (name && form) {
                form.setValue(name, concatinatedOptions[index])
            }
        }

        const updateSelected = (index: number) => {
            setSelected(index)
            runCallbacks(index)
            form && form.clearErrors(name)
        }

        const renderedOptions = useMemo(() => {
            return concatinatedOptions.map((option, index) => (
                <SelectOption key={option.id} option={option} index={index} />
            ))
        }, [concatinatedOptions, selected])

        const error = form && name && form.formState.errors[name]
        const selectedValue =
            concatinatedOptions &&
            concatinatedOptions.length > 0 &&
            selected !== undefined &&
            concatinatedOptions[selected].value

        let ButtonIcon: React.ElementType | undefined = undefined
        const selectedIcon = selected !== undefined && concatinatedOptions[selected].icon

        if (selectedIcon) {
            ButtonIcon = selectedIcon
        } else if (buttonIcon) {
            ButtonIcon = buttonIcon
        }

        return (
            <div className="relative">
                <Listbox value={selected} onChange={updateSelected}>
                    {label && (
                        <Listbox.Label
                            className={clsx(
                                'text-sm mb-xsm',
                                error ? 'text-error-text font-bold' : 'text-text'
                            )}
                            htmlFor={id}
                        >
                            {label}
                        </Listbox.Label>
                    )}
                    <Listbox.Button
                        id={id}
                        as={Button}
                        style="input"
                        className="w-full group"
                        error={error}
                        aria-invalid={!!error}
                    >
                        {({ open }) => (
                            <>
                                {loading ? (
                                    <LoadingIndicator />
                                ) : (
                                    <>
                                        {ButtonIcon && (
                                            <ButtonIcon
                                                className={clsx(
                                                    error
                                                        ? open
                                                            ? 'text-error-text'
                                                            : 'text-error-highlight-text'
                                                        : open
                                                        ? 'text-focus-input'
                                                        : 'text-text-extra',
                                                    buttonIconClassName
                                                )}
                                            />
                                        )}
                                    </>
                                )}
                                <span className="flex-1 font-normal text-left">
                                    {selectedValue}
                                </span>
                                <SelectorIcon />
                            </>
                        )}
                    </Listbox.Button>
                    <InputError title={getFieldErrorMessage(error)} />
                    <Transition
                        as={React.Fragment}
                        leave="transition-opacity ease-in duration-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options ref={ref} className="absolute w-full -mt-1" {...props}>
                            <Card
                                noPadding={true}
                                className={clsx(
                                    'z-10 overflow-y-auto rounded-t-none rounded-b-sm py-xsm',
                                    'shadow-2xl max-h-dropdown border-1 border-border-dark',
                                    'dark:bg-background-highlight dark:border-0 dark:border-t-1'
                                )}
                            >
                                {renderedOptions}
                            </Card>
                        </Listbox.Options>
                    </Transition>
                </Listbox>
            </div>
        )
    }
)

export default Select
