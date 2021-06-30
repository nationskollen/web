import clsx from 'clsx'
import React from 'react'
import { toast } from 'react-hot-toast'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import Button from '@common/Button'

export interface Props {
    id: string
    visible: boolean
    className?: string
    children?: React.ReactNode
}

const BaseNotification = ({ id, visible, className, children }: Props) => {
    return (
        <Transition
            as={React.Fragment}
            appear={true}
            show={visible}
            enter="transition origin-top duration-in ease-out"
            enterFrom="transform scale-90 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition origin-top duration-out ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-90 opacity-0"
        >
            <div
                className={clsx(
                    'rounded shadow-lg p-3 flex flex-row items-center w-full',
                    className || 'bg-background dark:bg-background-highlight text-text-highlight'
                )}
            >
                <div className="flex flex-row items-center flex-1 mr-3 font-bold space-x-3">
                    {children}
                </div>
                <Button size="icon-small" style="transparent" onClick={() => toast.dismiss(id)}>
                    <XIcon />
                </Button>
            </div>
        </Transition>
    )
}

export default BaseNotification
