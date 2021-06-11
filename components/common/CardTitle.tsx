import React from 'react'
import { extend } from '@utils'
import { Dialog } from '@headlessui/react'

import Title from '@common/Title'

export interface Props {
    title: string
    description?: React.ReactNode
    modal?: boolean
    className?: string
    children?: React.ReactNode
}

const CardTitle = ({ title, description, modal, className, children }: Props) => {
    return (
        <section className={extend('flex flex-row items-start justify-between', className)}>
            <div>
                {modal ? (
                    <>
                        <Dialog.Title as={Title} text={title} className="text-text-highlight" />
                        <Dialog.Description className="text-md">
                            {description}
                        </Dialog.Description>
                    </>
                ) : (
                    <>
                        <Title text={title} className="text-text-highlight" />
                        <p className="text-md">{description}</p>
                    </>
                )}
            </div>
            {children}
        </section>
    )
}

export default CardTitle
