import clsx from 'clsx'
import React from 'react'

export interface Props {
    label: string
    checked: boolean
    icon?: React.ElementType
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

const SelectableOption = React.forwardRef(({ checked, label, icon: IconComponent, className, onClick, children }: Props, ref: React.Ref<any>) => {
    return (
        <div
            onClick={onClick}
            ref={ref}
            className={clsx(
                'flex flex-row justify-between px-md items-center group space-x-sm',
                'rounded-sm py-3 box-border focus:outline-none border-1 border-transparent',
                'transition-colors duration-in',
                className,
                checked
                    ? 'bg-primary-highlight text-primary'
                    : 'bg-background-extra text-text border-border-dark hover:bg-border'
            )}
        >
            {IconComponent && <IconComponent className="w-5 h-5" />}
            <p className="text-sm font-bold">{label}</p>
            {children}
        </div>
    )
})

export default SelectableOption
