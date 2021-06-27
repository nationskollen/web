import clsx from 'clsx'
import React from 'react'

export interface Props {
    label: string
    icon: React.ElementType
    checked?: boolean
    children?: React.ReactNode
}

const RadioPillItem = ({ checked, label, icon: IconComponent, children }: Props) => {
    return (
        <div
            className={clsx(
                'flex flex-row justify-center items-center group space-x-sm',
                'rounded-sm py-3 box-border focus:outline-none border-1 border-transparent',
                'transition-colors duration-in',
                checked
                    ? 'bg-primary-highlight text-primary'
                    : 'bg-background-extra text-text dark:border-border-dark hover:bg-border'
            )}
        >
            {IconComponent && <IconComponent className="w-5 h-5" />}
            <p className="text-sm font-bold">{label}</p>
            {children}
        </div>
    )
}

export default RadioPillItem
