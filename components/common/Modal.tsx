import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { extend, getUrlHash } from '@utils'
import { Dialog, Transition } from '@headlessui/react'

import Card from '@common/Card'
import CardTitle from '@common/CardTitle'

export interface Props {
    open: boolean
    setOpen: (open: boolean) => void
    title?: string
    description?: string | React.ElementType
    href?: string
    containerComponent?: React.ElementType
    containerClassName?: string
    cardClassName?: string
    cardTitleClassName?: string
    noPadding?: boolean
    appear?: boolean
    onClose?: () => void
    children?: React.ReactNode
}

const Modal = ({
    open,
    setOpen,
    title,
    description,
    href,
    containerComponent,
    cardClassName,
    cardTitleClassName,
    noPadding,
    appear,
    onClose,
    children,
}: Props) => {
    const router = useRouter()
    const WrapperComponent = containerComponent || React.Fragment

    const handleClose = () => {
        setOpen(false)
        onClose && onClose()
    }

    useEffect(() => {
        if (href && getUrlHash(router.asPath) === href) {
            setOpen(true)
        }
    }, [href])

    useEffect(() => {
        if (!href) {
            return
        }

        const currentHash = getUrlHash(router.asPath)

        if (open === true && currentHash !== href) {
            router.replace(href)
        } else if (open === false && currentHash === href) {
            router.replace(router.pathname)
        }
    }, [open, href])

    return (
        <Transition appear={appear} as={React.Fragment} show={open}>
            <Dialog
                open={open}
                onClose={handleClose}
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
                    <Card
                        className={extend('w-full min-w-modal mt-modal-offset', cardClassName)}
                        noPadding={noPadding}
                    >
                        <WrapperComponent>
                            {title && description && (
                                <CardTitle
                                    modal={true}
                                    className={cardTitleClassName}
                                    title={title}
                                    description={description}
                                />
                            )}
                            {children}
                        </WrapperComponent>
                    </Card>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}

export default Modal
