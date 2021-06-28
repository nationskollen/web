import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'
import React, { useState, useEffect } from 'react'

import Checkmark from '@common/Checkmark'
import { NativeInputProps } from '@common/Input'

export interface Props extends NativeInputProps {
    label: string
    initialValue?: boolean
    icon?: React.ElementType
}

const Checkbox = React.forwardRef(({ name, label, initialValue, icon: IconComponent, onChange, ...props }: Props, ref: React.Ref<any>) => {
    const form = useFormContext()
    const [checked, setChecked] = useState(!!initialValue)

    // Save initial value to form state
    useEffect(() => {
        if (form && name) {
            const savedValue = form.getValues(name)

            // Must compare with `undefined` and `null` directly since
            // the saved value might be `false`.
            if (savedValue !== undefined && savedValue !== null) {
                setChecked(savedValue)
            } else {
                form.setValue(name, checked)
            }
        }
    }, [])

    const handleChange = (_) => {
        setChecked(!checked)
        form && name && form.setValue(name, !checked)
    }

    return (
        <label
            className={clsx(
                'group h-12 w-full rounded-sm border-1 shadow',
                'flex flex-row items-center px-md space-x-sm py-sm cursor-pointer',
                'focus-within:outline-none focus-within:ring-2 focus-within:ring-focus-input',
                'bg-background border-border-dark dark:border-transparent dark:bg-background-highlight',
                checked ? 'text-primary-text dark:text-text-highlight dark:bg-border-dark' : 'text-text'
            )}
        >
            {IconComponent && <IconComponent className="w-5 h-5" />}
            <span className="flex-1 font-bold text-sm">{label}</span>
            <input
                ref={ref}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="w-0 h-0 appearance-none pointer-events-none opacity-0"
                {...props}
            />
            <Checkmark checked={checked} />
        </label>
    )
})

export default Checkbox
