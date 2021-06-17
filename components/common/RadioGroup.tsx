import clsx from 'clsx'
import React from 'react'
import { RadioGroup } from '@headlessui/react'

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
    itemClassName?: string
    noCheckmark?: boolean
    [key: string]: unknown
}

const Radio = ({
    className,
    itemClassName,
    as: Component,
    title,
    value,
    items,
    onChange,
    noCheckmark,
    ...props
}: Props) => {
    return (
        <RadioGroup value={value} onChange={onChange}>
            {title && (
                <RadioGroup.Label
                    as={Title}
                    size="small"
                    text={title}
                    className="mb-sm text-text-highlight"
                />
            )}
            <div className={clsx('cursor-pointer', className)}>
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
                            <Component
                                key={value}
                                value={value}
                                {...props}
                                {...field}
                                checked={checked}
                            >
                                {!noCheckmark && <Checkmark checked={checked} />}
                            </Component>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}

export default Radio
