import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Button from '@common/Button'

export type NativeSelectProps = Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'size' | 'style'
>
export interface OptionItem {
    id: string | number
    name: string
    disabled?: boolean
}

export interface Props extends NativeSelectProps {
    options: Array<OptionItem>
}

// TODO: Finish this
const Select = ({ options }: Props) => {
    if (!options || options.length === 0) {
        return null
    }

    const [selected, setSelected] = useState(options[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            <Listbox.Button as={Button} style="transparent">
                {selected.name}
            </Listbox.Button>
            <Listbox.Options>
                {options.map((option) => (
                    <Listbox.Option key={option.id} value={option} disabled={option.disabled}>
                        {option.name}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}

export default Select
