import React from 'react'
import { combine } from '@utils'

export interface Props {
    label: string
    icon: React.ElementType
    checked?: boolean
    children?: React.ReactElement | React.ReactElement[]
}

const RadioPillItem = ({ checked, label, icon: IconComponent, children }: Props) => {
    return (
        <div
            className={combine(
                'flex flex-row justify-center items-center group space-x-sm',
                'rounded-sm px-sm py-sm box-border focus:outline-none',
                checked ? 'bg-primary-highlight text-primary' : 'bg-background-extra text-text'
            )}
        >
            <IconComponent className="w-5 h-5" />
            <p className="text-sm font-bold">{label}</p>
            {children}
        </div>
    )
}

export default RadioPillItem
