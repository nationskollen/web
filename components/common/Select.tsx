/**
 * Renders a generic select component.
 *
 * Note that if you want to use this component in a form,
 * you MUST pass in the `setValue` callback from the
 * `useForm` hook. This is required because this select component
 * does not use the native select element, but rather a custom solution.
 *
 * You can get the `setValue` function like this:
 * ```typescript
 * // import { useForm } from 'react-hook-form'
 * const { setValue, ... } = useForm<FormValues>()
 * ```
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
 *     setValue={setValue}
 *     {...register('category')}
 * />
 * ```
 *
 * @module Common
 */
import React, { useState, useMemo, useEffect } from 'react'
import { combine, extend } from '@utils'
import { UseFormSetValue } from 'react-hook-form'
import { SelectorIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'

import Card from '@common/Card'
import Button from '@common/Button'
import SelectOption from '@common/SelectOption'
import LoadingIndicator from '@common/LoadingIndicator'

export type NativeSelectProps = Omit<React.SelectHTMLAttributes<HTMLUListElement>, 'size' | 'style'>

export interface OptionItem {
    id: string | number
    value: string
    disabled?: boolean
}

export interface Props extends Omit<NativeSelectProps, 'onSelect'> {
    label: string
    loading?: boolean
    setValue?: UseFormSetValue<any>
    onSelect?: (option: OptionItem) => void
    options: Array<OptionItem>
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
            buttonIcon: ButtonIcon,
            buttonIconClassName,
            name,
            setValue,
            onSelect,
            ...props
        }: Props,
        ref: React.Ref<any>
    ) => {
        const [selected, setSelected] = useState(options ? 0 : undefined)

        // Make sure to set the initial value in the form
        // even if the user does not modify the selected value.
        useEffect(() => {
            if (selected !== undefined) {
                runCallbacks(selected)
            }
        }, [])

        // Update the selected value when the options or loading state are changed.
        // This is required to allow async data to be passed in as options.
        useEffect(() => {
            // Do not update selected if we already have a selected one
            if (selected !== undefined) {
                return
            }

            if (!loading && options && options.length > 0) {
                updateSelected(0)
            }
        }, [loading, options])

        // Runs all the registered callbacks when changing selected value
        const runCallbacks = (index: number) => {
            onSelect && onSelect(options[index])
            name && setValue && setValue(name, options[index])
        }

        const updateSelected = (index: number) => {
            setSelected(index)
            runCallbacks(index)
        }

        const renderedOptions = useMemo(() => {
            if (!options) {
                return []
            }

            return options.map((option, index) => (
                <SelectOption key={option.id} option={option} index={index} />
            ))
        }, [options, selected])

        const selectedValue =
            options && options.length > 0 && selected !== undefined && options[selected].value

        return (
            <div className="relative">
                <Listbox value={selected} onChange={updateSelected}>
                    {label && (
                        <Listbox.Label className="text-sm mb-xsm text-text" htmlFor={id}>
                            {label}
                        </Listbox.Label>
                    )}
                    <Listbox.Button id={id} as={Button} style="input" className="w-full group">
                        {({ open }) => (
                            <>
                                {loading ? (
                                    <LoadingIndicator />
                                ) : (
                                    <>
                                        {ButtonIcon && (
                                            <ButtonIcon
                                                className={extend(
                                                    open ? 'text-focus-input' : 'text-text-extra',
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
                    <Transition
                        as={React.Fragment}
                        leave="transition-opacity ease-in duration-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options ref={ref} className="absolute w-full -mt-1" {...props}>
                            <Card
                                noPadding={true}
                                className={combine(
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
