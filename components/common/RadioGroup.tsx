import clsx from 'clsx'
import React, { useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useFormContext } from 'react-hook-form'

import RadioCircle from '@common/RadioCircle'
import SelectableOption, { Props as SelectableOptionProps } from '@common/SelectableOption'

export type Directions = 'row' | 'column'

export interface RadioItem extends Omit<SelectableOptionProps, 'checked'> {
    value: string
}

export interface Props {
    name: string
    title?: string
    value: string
    items: Array<RadioItem>
    direction?: Directions
    onSelect?: (value: string) => void
    className?: string
    itemClassName?: string
}

const CustomRadioGroup = React.forwardRef(({
    name,
    className,
    itemClassName,
    title,
    value,
    items,
    direction,
    onSelect,
    ...props
}: Props, ref: React.Ref<any>) => {
    const form = useFormContext()

    // Make sure to save the initial value to the form state
    useEffect(() => {
        if (form && name && value !== undefined) {
            form.setValue(name, value)
        }
    }, [])

    const handleChange = (value: string) => {
        if (form && name) {
            form.setValue(name, value)
        }

        onSelect && onSelect(value)
    }

    return (
        <RadioGroup value={value} onChange={handleChange}>
            {title && (
                <RadioGroup.Label as="label" className="text-sm text-text tracking-wide font-bold">
                    {title}
                </RadioGroup.Label>
            )}
            <div
                ref={ref}
                className={clsx(
                    'cursor-pointer mt-xsm',
                    direction === 'row'
                        ? 'flex flex-row items-center justify-between space-x-sm'
                        : 'flex flex-col items-start justify-start space-y-sm',
                    className
                )}
            >
                {items.map(({ value, ...field }, index) => (
                    <RadioGroup.Option
                        value={value}
                        key={`${value}-${index}`}
                        className={clsx(
                            'focus:ring-2 focus:ring-focus-primary rounded-sm',
                            itemClassName
                        )}
                    >
                        {({ checked }) => (
                            <SelectableOption
                                key={value}
                                checked={checked}
                                {...props}
                                {...field}
                            >
                                <RadioCircle checked={checked} />
                            </SelectableOption>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
})

export default CustomRadioGroup
