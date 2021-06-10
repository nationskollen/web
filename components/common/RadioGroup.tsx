import React from 'react'
import { RadioGroup } from '@headlessui/react'
import { extend } from '@utils'
import Title from '@common/Title'
import Checkmark from '@common/Checkmark'

export interface RadioItem {
    value: string
    [key: string]: unknown
}

export interface Props {
    as: React.ElementType
    title?: string
    value: string
    items: Array<RadioItem>
    onChange: (value: string) => void
    className?: string
    [key: string]: unknown
}

const Radio = ({ className, as: Component, title, value, items, onChange, ...props }: Props) => {
    return (
        <RadioGroup value={value} onChange={onChange}>
            {title && (
                <RadioGroup.Label as={Title} size="small">
                    {title}
                </RadioGroup.Label>
            )}
            <div className={extend('cursor-pointer', className)}>
                {items.map(({ value, ...field }) => (
                    <RadioGroup.Option value={value}>
                        {({ checked }) => (
                            <Component value={value} {...props} {...field} checked={checked}>
                                <Checkmark checked={checked} />
                            </Component>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default Radio
