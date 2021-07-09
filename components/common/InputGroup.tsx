import clsx from 'clsx'
import React from 'react'

export interface Props {
    label?: string
    columns?: number
    className?: string
    children?: React.ReactNode
}

// This is needed because tailwind can not
// generate CSS-classes if you do someting like `grid-cols-${count}`
const getColumns = (count: number) => {
    switch (count) {
        case 0:
            return 'grid-cols-0'
        case 1:
            return 'grid-cols-1'
        case 2:
            return 'grid-cols-2'
        case 3:
            return 'grid-cols-3'
    }
}

const InputGroup = ({ label, columns, className, children }: Props) => {
    return (
        <fieldset className={className}>
            {label && <legend className="text-sm text-text mb-xsm">{label}</legend>}
            <div
                className={clsx(
                    'grid gap-md h-full',
                    getColumns(columns || React.Children.count(children))
                )}
            >
                {children}
            </div>
        </fieldset>
    )
}

export default InputGroup
