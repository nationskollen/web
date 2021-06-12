/**
 * Renders a generic form select.
 *
 * Note that if you want to use this component in a form,
 * you MUST pass in the `setValue` callback from the
 * `useForm` hook. This is required because this select component
 * does not use the native select element, but rather a custom solution.
 * This is required to have a custom dropdown.
 *
 * You can get the `setValue` function like this:
 * ```typescript
 * const { setValue, ... } = useForm<FormValues>()
 * ```
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
import React, { useState } from 'react'
import { combine, extend } from '@utils'
import { UseFormSetValue } from 'react-hook-form'
import { SelectorIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'

import Card from '@common/Card'
import Button from '@common/Button'
import SelectOption from '@common/SelectOption'

export type NativeSelectProps = Omit<React.SelectHTMLAttributes<HTMLUListElement>, 'size' | 'style'>
export interface OptionItem {
    id: string | number
    value: string
    disabled?: boolean
}

export interface Props extends Omit<NativeSelectProps, 'onSelect'> {
    label: string
    setValue?: UseFormSetValue<any>
    onSelect?: (value: string) => void
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
            buttonIcon: ButtonIcon,
            buttonIconClassName,
            name,
            setValue,
            onSelect,
            ...props
        }: Props,
        ref: React.Ref<any>
    ) => {
        if (!options || options.length === 0) {
            return null
        }

        const [selected, setSelected] = useState(options[0])

        const updateSelected = (item: OptionItem) => {
            setSelected(item)
            onSelect && onSelect(item.value)
            name && setValue && setValue(name, item.value)
        }

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
                                {ButtonIcon && (
                                    <ButtonIcon
                                        className={extend(
                                            open ? 'text-focus-input' : 'text-text-extra',
                                            buttonIconClassName,
                                        )}
                                    />
                                )}
                                <span className="flex-1 font-normal text-left">{selected.value}</span>
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
                                    'dark:bg-background-highlight dark:border-0 dark:border-t-1',
                                )}
                            >
                                {options.map((option) => (
                                    <SelectOption key={option.id} option={option} />
                                ))}
                            </Card>
                        </Listbox.Options>
                    </Transition>
                </Listbox>
            </div>
        )
    }
)

export default Select
