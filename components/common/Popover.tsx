import React, { useState } from 'react'
import { combine, extend } from '@utils'
import { usePopper } from 'react-popper'
import { Popover, Transition } from '@headlessui/react'

import Card from '@common/Card'
import Button, { ButtonStyles } from '@common/Button'

export interface Props {
    button: (open: boolean) => React.ReactElement
    buttonStyle?: ButtonStyles
    buttonClassName?: string
    buttonFocus?: string
    cardClassName?: string
    children?: React.ReactElement | React.ReactElement[]
}

const CustomPopover = ({
    cardClassName,
    button,
    buttonStyle,
    buttonClassName,
    buttonFocus,
    children,
}: Props) => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>()
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>()
    const { attributes } = usePopper(referenceElement, popperElement, {
        placement: 'bottom-start',
    })
    const buttonClasses = extend('focus:outline-none', buttonClassName)
    const cardClasses = extend('shadow-2xl dark:bg-background-highlight', cardClassName)
    const triangleClasses = combine(
        'absolute w-4 h-4 transform rotate-45 right-md -top-2 z-behind',
        'border-t-1 border-l-1 border-card bg-background',
        'dark:border-border-dark dark:bg-background-highlight'
    )

    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        ref={setReferenceElement}
                        as={Button}
                        style={buttonStyle}
                        className={buttonClasses}
                        focus={buttonFocus}
                    >
                        {button(open)}
                    </Popover.Button>
                    <div
                        ref={setPopperElement}
                        className="absolute right-0 top-12"
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
                                <Card className={cardClasses} containerClassName="relative">
                                    <div className={triangleClasses} />
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
