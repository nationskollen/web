import React from 'react'
import Input, { NativeInputProps } from '@common/Input'

export interface Props extends Omit<NativeInputProps, 'children'> {
    checked?: boolean
}

const Checkbox = ({ checked, ...props }: Props) => {
    return (
        <Input
            type="checkbox"
            style="no-border"
            inputClassName="transform scale-110"
            checked={checked}
            {...props}
        />
    )
}

export default Checkbox
