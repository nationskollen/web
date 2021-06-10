import React from 'react'
import { combine } from '@utils'
import { CheckIcon } from '@heroicons/react/solid'

export interface Props {
    checked: boolean
}

const Checkmark = ({ checked }: Props) => {
    return (
        <div
            className={combine(
                'w-5 h-5 p-0 rounded-sm border-2',
                checked ? 'border-text-highlight' : 'border-border-dark'
            )}
        >
            <CheckIcon
                className={
                    checked ? 'text-text-highlight' : 'group-hover:text-text-extra text-transparent'
                }
            />
        </div>
    )
}

export default Checkmark
