import clsx from 'clsx'
import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import { Popover, Transition } from '@headlessui/react'

import Card from '@common/Card'

export interface Props {
    button: (open: boolean) => React.ReactElement
    cardClassName?: string
    children?: React.ReactNode
}

const CustomPopover = ({ cardClassName, button, children, ...props }: Props) => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>()
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>()
    const { attributes } = usePopper(referenceElement, popperElement, {
        placement: 'bottom-start',
    })

    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button as="div" ref={setReferenceElement} {...props}>
                        {button(open)}
                    </Popover.Button>
                    <div
                        ref={setPopperElement}
                        className="absolute right-0 z-20 top-9"
                        {...attributes.popper}
                    >
                        <Transition
                            show={open}
                            enter="transition origin-top duration-in ease-out"
                            enterFrom="transform scale-90 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition origin-top duration-out ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-90 opacity-0"
                        >
                            <Popover.Panel static={true} className="pt-md">
                                <Card
                                    containerClassName="relative"
                                    className={clsx(
                                        'shadow-xl dark:bg-background-extra',
                                        cardClassName
                                    )}
                                >
                                    <div
                                        className={clsx(
                                            'absolute w-2 h-2 transform rotate-45 right-4',
                                            '-top-1 z-behind border-t-1 border-l-1 border-card bg-background',
                                            'dark:bg-background-extra dark:border-border-dark'
                                        )}
                                    />
                                    <>{children}</>
                                </Card>
                            </Popover.Panel>
                        </Transition>
                    </div>
                </>
            )}
        </Popover>
    )
}

export default CustomPopover
