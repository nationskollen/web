import clsx from 'clsx'
import React from 'react'

export interface Props {
    label: string
    checked: boolean
    icon?: React.ElementType
    className?: string
    children?: React.ReactNode
}

const RadioOption = React.forwardRef(
    ({ checked, label, icon: IconComponent, className, children }: Props, ref: React.Ref<any>) => {
        return (
            <div
                ref={ref}
                className={clsx(
                    'h-12 flex flex-row justify-between px-md items-center group space-x-sm',
                    'rounded-sm py-3 box-border border-1 border-border-dark dark:border-transparent',
                    'focus:outline-none',
                    'transition-colors duration-in bg-background dark:bg-background-highlight',
                    className,
                    checked
                        ? 'text-primary dark:text-text-highlight dark:bg-border-dark'
                        : 'text-text'
                )}
            >
                {IconComponent && <IconComponent className="w-5 h-5" />}
                <p className="text-sm font-bold">{label}</p>
                {children}
            </div>
        )
    }
)

export default RadioOption
