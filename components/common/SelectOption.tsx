import clsx from 'clsx'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'

import { OptionItem } from '@common/Select'

export interface Props {
    index: number
    option: OptionItem
}

const ACTIVE_STYLE = clsx('bg-background-extra text-text-highlight', 'dark:bg-border-dark')

const SelectOption = ({ option, index }: Props) => {
    return (
        <Listbox.Option value={index} disabled={option.disabled}>
            {({ active, selected }) => (
                <div
                    className={clsx(
                        'px-md py-sm flex flex-row items-center',
                        active ? ACTIVE_STYLE : ''
                    )}
                >
                    <div className="w-5 h-5 mr-sm">
                        {selected && <CheckIcon className="text-primary dark:text-primary-text" />}
                    </div>
                    {option.value}
                </div>
            )}
        </Listbox.Option>
    )
}

export default SelectOption
