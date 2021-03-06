import clsx from 'clsx'
import { getUrlHash } from '@utils'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'

import Card from '@common/Card'
import CardTitle from '@common/CardTitle'

export interface OpenProps {
    open: boolean
    setOpen: (open: boolean) => void
}

export interface Props extends OpenProps {
    title?: string
    description?: string | React.ElementType
    href?: string
    containerClassName?: string
    cardClassName?: string
    cardTitleClassName?: string
    noPadding?: boolean
    offsetClassName?: string
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
    cardClassName,
    cardTitleClassName,
    noPadding,
    appear,
    offsetClassName,
    onClose,
    children,
}: Props) => {
    const router = useRouter()

    const handleClose = () => {
        setOpen(false)
        onClose && onClose()
    }

    useEffect(() => {
        if (href && getUrlHash(router.asPath).hash === href) {
            setOpen(true)
        }
    }, [href])

    useEffect(() => {
        if (!href) {
            return
        }

        const { path, hash } = getUrlHash(router.asPath)

        if (open === true && hash !== href) {
            router.replace(href)
        } else if (open === false && hash === href) {
            router.replace(path)
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
                        className={clsx(
                            'w-full min-w-modal',
                            cardClassName,
                            offsetClassName || 'mt-modal-offset'
                        )}
                        noPadding={noPadding}
                    >
                        {title && description && (
                            <CardTitle
                                modal={true}
                                className={cardTitleClassName}
                                title={title}
                                description={description}
                            />
                        )}
                        {children}
                    </Card>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}

export default Modal
