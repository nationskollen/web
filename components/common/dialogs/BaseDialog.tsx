import React, { useState } from 'react'

import ModalContent from '@common/ModalContent'
import Modal, { Props as ModalProps } from '@common/Modal'
import Button, { Props as ButtonProps } from '@common/Button'

export type ActionCallback = () => void

export interface ActionProps extends Omit<ButtonProps, 'children'> {
    label: string
    icon?: React.ElementType
}

export interface ActionCallbacks {
    onConfirm: ActionCallback
    onCancel: ActionCallback
}

export interface ActionsRendererProps extends ActionCallbacks {
    confirmLabel: string
    cancelLabel: string
}

export type ActionsRenderer = (props: ActionsRendererProps) => Array<ActionProps>

export interface Props extends ActionCallbacks, Omit<ModalProps, 'open' | 'setOpen'> {
    title: string
    description: string
    actions: ActionsRenderer
    confirmLabel?: string
    cancelLabel?: string
    icon?: React.ElementType
    iconClassName?: string
    open?: boolean
    setOpen?: (open: boolean) => void
    children?: React.ReactNode
}

const BaseDialog = ({
    open: customOpen,
    setOpen: customSetOpen,
    title,
    icon,
    iconClassName,
    description,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel,
    children,
    actions,
    ...props
}: Props) => {
    const [open, setOpen] = useState<boolean>(customOpen !== undefined ? customOpen : true)

    const updateState = (open: boolean) => {
        customSetOpen ? customSetOpen(open) : setOpen(open)
    }

    const handleConfirm = () => {
        updateState(false)
        onConfirm()
    }

    const handleCancel = () => {
        updateState(false)
        onCancel()
    }

    const compiledActions = actions({
        onConfirm: handleConfirm,
        onCancel: handleCancel,
        confirmLabel: confirmLabel || 'Okej',
        cancelLabel: cancelLabel || 'Avbryt',
    })

    return (
        <Modal
            open={open}
            setOpen={customSetOpen || setOpen}
            noPadding={true}
            appear={true}
            cardClassName="w-dialog min-h-dialog max-h-dialog"
            onClose={handleCancel}
            {...props}
        >
            <ModalContent.Wrapper>
                <ModalContent.Header title={title} description={description} icon={icon} iconClassName={iconClassName} />
                <ModalContent.Main>{children}</ModalContent.Main>
                <ModalContent.Actions>
                    {compiledActions.map(({ label, icon, style, ...props }) => (
                        <Button key={label} style={style} size="medium" radius="large" {...props}>
                            <span>{label}</span>
                            {icon}
                        </Button>
                    ))}
                </ModalContent.Actions>
            </ModalContent.Wrapper>
        </Modal>
    )
}

export default BaseDialog