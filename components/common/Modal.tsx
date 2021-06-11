import React from 'react'
import { Dialog, Transition } from '@headlessui/react'

import Card from '@common/Card'
import Title from '@common/Title'

export interface Props {
    open: boolean
    setOpen: (open: boolean) => void
    title: string
    description: string | React.ElementType
    children?: React.ReactNode
}

const Modal = ({ open, setOpen, title, description, children }: Props) => {
    return (
        <Transition as={React.Fragment} show={open}>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                as="div"
                className="fixed inset-0 z-50 flex flex-col items-center overflow-y-auto"
            >
                <Transition.Child
                    enter="ease-out transition-opacity duration-in"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in transition-opacity duration-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-overlay" />
                </Transition.Child>

                <Transition.Child
                    enter="transition origin-bottom duration-in ease-out"
                    enterFrom="transform scale-90 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition origin-bottom duration-out ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-90 opacity-0"
                >
                    <Card className="w-full min-w-modal mt-1/5">
                        <Dialog.Title as={Title} text={title} className="text-text-highlight" />
                        <Dialog.Description>{description}</Dialog.Description>
                        <>{children}</>
                    </Card>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}

export default Modal
