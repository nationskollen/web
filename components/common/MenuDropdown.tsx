import clsx from 'clsx'
import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import { Menu, Transition } from '@headlessui/react'

import Card from '@common/Card'
import Button, { Props as ButtonProps } from '@common/Button'

export interface Props extends ButtonProps {
    button: (open: boolean) => React.ReactElement
    cardClassName?: string
    children?: React.ReactNode
}

const MenuDropdown = ({ cardClassName, button, children, ...props }: Props) => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>()
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>()
    const { attributes } = usePopper(referenceElement, popperElement, {
        placement: 'bottom-start',
    })

    return (
        <Menu>
            {({ open }) => (
                <div className="relative">
                    <Menu.Button ref={setReferenceElement} as={Button} {...props}>
                        {button(open)}
                    </Menu.Button>
                    <div
                        className="absolute right-0 z-20 top-10"
                        ref={setPopperElement}
                        {...attributes.popper}
                    >
                        <Transition
                            as={React.Fragment}
                            show={open}
                            enter="transition origin-top duration-in ease-out"
                            enterFrom="transform scale-90 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition origin-top duration-out ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-90 opacity-0"
                        >
                            <Menu.Items>
                                <Card
                                    noPadding={true}
                                    className={clsx(
                                        'w-menu-popover border-1 p-xsm',
                                        'dark:bg-background-highlight border-border-dark',
                                        cardClassName
                                    )}
                                >
                                    {children}
                                </Card>
                            </Menu.Items>
                        </Transition>
                    </div>
                </div>
            )}
        </Menu>
    )
}

export default MenuDropdown
