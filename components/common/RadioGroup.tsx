import clsx from 'clsx'
import React, { useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import { useFormContext } from 'react-hook-form'

import RadioCircle from '@common/RadioCircle'
import RadioOption, { Props as RadioOptionProps } from '@common/RadioOption'

export type Directions = 'row' | 'column'

export interface RadioItem<T> extends Omit<RadioOptionProps, 'checked'> {
    value: T
}

export interface Props<T> {
    name: string
    title?: string
    value: T
    items: Array<RadioItem<T>>
    direction?: Directions
    onSelect?: (value: T) => void
    className?: string
    itemClassName?: string
}

const CustomRadioGroup = React.forwardRef(
    <T,>(
        {
            name,
            className,
            itemClassName,
            title,
            value,
            items,
            direction,
            onSelect,
            ...props
        }: Props<T>,
        ref: React.Ref<any>
    ) => {
        const form = useFormContext()

        // Make sure to save the initial value to the form state
        useEffect(() => {
            if (form && name && value !== undefined) {
                form.setValue(name, value)
            }
        }, [])

        const handleChange = (value: T) => {
            if (form && name) {
                form.setValue(name, value)
            }

            onSelect && onSelect(value)
        }

        return (
            <RadioGroup value={value} onChange={handleChange}>
                {title && (
                    <RadioGroup.Label as="label" className="text-sm text-text">
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
                                'focus:ring-2 focus:ring-focus-primary rounded-sm shadow',
                                itemClassName
                            )}
                        >
                            {({ checked }) => (
                                <RadioOption
                                    key={`${value}`}
                                    checked={checked}
                                    {...props}
                                    {...field}
                                >
                                    <RadioCircle checked={checked} />
                                </RadioOption>
                            )}
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        )
    }
)

export default CustomRadioGroup
