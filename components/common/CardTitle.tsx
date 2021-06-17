import clsx from 'clsx'
import React from 'react'
import { Dialog } from '@headlessui/react'

import Title from '@common/Title'

export interface Props {
    title: string
    description?: React.ReactNode
    modal?: boolean
    className?: string
    children?: React.ReactNode
    descriptionClassName?: string
}

const CardTitle = ({
    title,
    description,
    modal,
    className,
    descriptionClassName,
    children,
}: Props) => {
    return (
        <section className={clsx('flex flex-row items-start justify-between', className)}>
            <div>
                {modal ? (
                    <>
                        <Dialog.Title as={Title} text={title} className="text-text-highlight" />
                        <Dialog.Description className={clsx('text-md', descriptionClassName)}>
                            {description}
                        </Dialog.Description>
                    </>
                ) : (
                    <>
                        <Title text={title} className="text-text-highlight" />
                        <p className={clsx('text-md', descriptionClassName)}>{description}</p>
                    </>
                )}
            </div>
            {children}
        </section>
    )
}

export default CardTitle
