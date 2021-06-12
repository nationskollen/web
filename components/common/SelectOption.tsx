import { combineNoCache } from '@utils'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'

import { OptionItem } from '@common/Select'

export interface Props {
    option: OptionItem
}

const ACTIVE_STYLE = combineNoCache(
    'bg-primary-highlight text-primary-text',
    'dark:bg-primary-dark dark:text-white',
)

const SelectOption = ({ option }: Props) => {
    return (
        <Listbox.Option value={option} disabled={option.disabled}>
            {({ active, selected }) => (
                <div
                    className={combineNoCache(
                        'px-md py-sm flex flex-row items-center',
                        active ? ACTIVE_STYLE : ''
                    )}
                >
                    <div className="w-5 h-5 mr-sm">
                        {selected && (
                            <CheckIcon
                                className="text-primary dark:text-primary-text"
                            />
                        )}
                    </div>
                    {option.value}
                </div>
            )}
        </Listbox.Option>
    )
}

export default SelectOption
