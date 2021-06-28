import React, { useState } from 'react'

import Checkmark from '@common/Checkmark'
import Input, { NativeInputProps } from '@common/Input'
import SelectableOption from '@common/SelectableOption'

export interface Props extends NativeInputProps {
    initialValue?: boolean
}

export interface InnerComponentProps {
    checked: boolean
    onClick?: () => void
}

const InnerComponent = ({ checked, onClick }: InnerComponentProps) => {
    return (
        <SelectableOption label="Hej" checked={checked} className="w-full" onClick={onClick}>
            <Checkmark checked={checked} />
        </SelectableOption>
    )
}

const Checkbox = React.forwardRef(({ initialValue, ...props }: Props, ref: React.Ref<any>) => {
    const [checked, setChecked] = useState(!!initialValue)

    const handleChange = (_) => {
        setChecked(!checked)
    }

    return (
        <Input
            ref={ref}
            type="checkbox"
            style="no-border"
            size="auto"
            checked={checked}
            noPadding={true}
            inputClassName="appearance-none"
            innerComponent={() => <InnerComponent checked={checked} onClick={handleChange} />}
            {...props}
            onChange={handleChange}
        />
    )
})

export default Checkbox
