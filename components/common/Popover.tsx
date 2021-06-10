import React, { useState } from 'react'
import { extend } from '@utils'
import { usePopper } from 'react-popper'
import { Popover } from '@headlessui/react'

import Card from '@common/Card'
import Button, { ButtonStyles } from '@common/Button'

export interface Props {
    button: (open: boolean) => React.ReactElement
    buttonStyle?: ButtonStyles
    buttonClassName?: string
    cardClassName?: string
    children?: React.ReactElement | React.ReactElement[]
}

const CustomPopover = ({
    cardClassName,
    button,
    buttonStyle,
    buttonClassName,
    children,
}: Props) => {
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>()
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>()
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'bottom-end',
    })
    const buttonClasses = extend('focus:outline-none', buttonClassName)
    const cardClasses = extend('shadow-2xl', cardClassName)

    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        ref={setReferenceElement}
                        as={Button}
                        style={buttonStyle}
                        className={buttonClasses}
                    >
                        {button(open)}
                    </Popover.Button>
                    <Popover.Panel
                        ref={setPopperElement}
                        style={styles.popper}
                        className="pt-md"
                        {...attributes.popper}
                    >
                        <Card className={cardClasses} containerClassName="relative">
                            <div className="absolute w-8 h-8 transform rotate-45 right-3 -top-1 bg-background" />
                            <>{children}</>
                        </Card>
                    </Popover.Panel>
                </>
            )}
        </Popover>
    )
}

export default CustomPopover
