import clsx from 'clsx'
import React from 'react'

export interface Props {
    checked: boolean
}

const RadioCircle = ({ checked }: Props) => {
    return (
        <div
            className={clsx(
                'w-4 h-4 p-xxsm rounded-full border-2 flex items-center justify-center',
                checked ? 'border-primary' : 'border-border-dark'
            )}
        >
            <div
                className={clsx(
                    'rounded-full w-full h-full',
                    checked ? 'bg-primary' : 'group-hover:bg-border-dark',
                )}
            />
        </div>
    )
}

export default RadioCircle
