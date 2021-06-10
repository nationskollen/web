import React from 'react'
import { extend } from '@utils'

export interface Props {
    label: string
    icon: React.ElementType
    checked?: boolean
    children?: React.ReactElement | React.ReactElement[]
}

const PopoverSectionItem = ({ checked, label, icon: IconComponent, children }: Props) => {
    const iconStyle = 'w-8 h-8 p-2 rounded-sm '
    const checkedStyle = 'bg-primary-highlight text-primary'
    const uncheckedStyle = 'bg-background-extra text-text'

    return (
        <div className="flex flex-row items-center group space-x-sm">
            <IconComponent className={extend(iconStyle, checked ? checkedStyle : uncheckedStyle)} />
            <p
                className={extend(
                    'flex-1',
                    checked ? 'text-primary-text dark:text-text-highlight' : 'text-text'
                )}
            >
                {label}
            </p>
            {children}
        </div>
    )
}

export default PopoverSectionItem
