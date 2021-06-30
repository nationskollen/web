import clsx from 'clsx'
import React from 'react'

export interface Props {
    label?: string
    columns?: number
    className?: string
    children?: React.ReactNode
}

const InputGroup = ({ label, columns, className, children }: Props) => {
    return (
        <fieldset>
            {label && <legend className="text-sm text-text mb-xsm">{label}</legend>}
            <div
                className={clsx(
                    `grid grid-cols-${columns || React.Children.count(children)} gap-md`,
                    className
                )}
            >
                {children}
            </div>
        </fieldset>
    )
}

export default InputGroup
