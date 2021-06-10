import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'

export interface Props {
    checked: boolean
}

const Checkmark = ({ checked }: Props) => {
    return (
        <div className="w-5 h-5 p-0 rounded-sm border-border-dark border-1">
            <CheckIcon
                className={
                    checked ? 'text-text-highlight' : 'group-hover:text-text-extra text-transparent'
                }
            />
        </div>
    )
}

export default Checkmark
