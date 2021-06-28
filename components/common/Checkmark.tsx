import clsx from 'clsx'
import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'

export interface Props {
    checked: boolean
}

const Checkmark = ({ checked }: Props) => {
    return (
        <div
            className={clsx(
                'w-5 h-5 p-0 rounded-sm border-2',
                checked
                    ? 'border-primary bg-primary dark:border-primary-text dark:bg-primary-text'
                    : 'border-border-dark bg-transparent'
            )}
        >
            <CheckIcon
                className={
                    checked ? 'text-white dark:text-background' : 'group-hover:text-text-extra text-transparent'
                }
            />
        </div>
    )
}

export default Checkmark
