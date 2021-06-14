import React, { useState } from 'react'

import Modal, { Props as ModalProps } from '@common/Modal'
import ModalContent, { HeaderIconStyles } from '@common/ModalContent'
import Button, { ButtonStyles, Props as ButtonProps } from '@common/Button'

export type ActionCallback = () => void

export interface ActionProps extends Omit<ButtonProps, 'children'> {
    label: string
    icon?: React.ElementType
}

export interface ActionCallbacks {
    onConfirm?: ActionCallback
    onCancel?: ActionCallback
}

export interface ActionsRendererProps extends ActionCallbacks {
    confirmLabel: string
    cancelLabel: string
    hasCancelCallback: boolean
}

export type ActionsRenderer = (props: ActionsRendererProps) => Array<ActionProps>

export interface Props extends ActionCallbacks, Omit<ModalProps, 'open' | 'setOpen'> {
    title: string
    description: string
    actions: ActionsRenderer
    confirmLabel?: string
    cancelLabel?: string
    icon?: React.ElementType
    iconStyle?: HeaderIconStyles
    open?: boolean
    setOpen?: (open: boolean) => void
    children?: React.ReactNode
}

export const getActions = (confirmStyle: ButtonStyles): ActionsRenderer => (
    ({ onConfirm, onCancel, confirmLabel, cancelLabel, hasCancelCallback }) => {
        const confirmAction = { label: confirmLabel, style: confirmStyle, onClick: onConfirm }

        if (!hasCancelCallback) {
            return [confirmAction]
        }

        return [
            { label: cancelLabel, style: 'light', onClick: onCancel },
            confirmAction,
        ]
    }
)

const BaseDialog = ({
    open: customOpen,
    setOpen: customSetOpen,
    title,
    icon,
    iconStyle,
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
        onConfirm && onConfirm()
    }

    const handleCancel = () => {
        updateState(false)
        onCancel && onCancel()
    }

    const compiledActions = actions({
        onConfirm: handleConfirm,
        onCancel: handleCancel,
        confirmLabel: confirmLabel || 'Okej',
        cancelLabel: cancelLabel || 'Avbryt',
        hasCancelCallback: !!onCancel,
    })

    return (
        <Modal
            open={open}
            setOpen={customSetOpen || setOpen}
            noPadding={true}
            appear={true}
            cardClassName="w-dialog min-h-dialog max-h-dialog"
            offsetClassName="mt-dialog-offset"
            onClose={handleCancel}
            {...props}
        >
            <ModalContent.Wrapper>
                <ModalContent.Header
                    title={title}
                    description={description}
                    icon={icon}
                    iconStyle={iconStyle}
                    className="p-lg"
                    descriptionClassName="mt-xsm"
                />
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
