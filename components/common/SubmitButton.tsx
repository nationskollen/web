import React from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/outline'

import Button, { Props as ButtonProps } from '@common/Button'

export type ButtonTypes = 'create' | 'save'

export interface Props extends Omit<ButtonProps, 'type'> {
    type?: ButtonTypes
    label?: string
    icon?: React.ElementType
}

const ICONS: Record<ButtonTypes, React.ReactNode> = {
    create: <PlusIcon />,
    save: <CheckIcon />,
}

const SubmitButton = ({ type, label, ...props }: Props) => {
    return (
        <Button type="submit" style="primary" className="self-end" {...props}>
            <span>{label}</span>
            {ICONS[type || 'create']}
        </Button>
    )
}

export default SubmitButton
