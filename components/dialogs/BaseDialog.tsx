import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'

import ModalContent from '@common/ModalContent'
import { IconCircleStyles } from '@common/IconCircle'
import Modal, { Props as ModalProps } from '@common/Modal'
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
    iconStyle?: IconCircleStyles
    open?: boolean
    setOpen?: (open: boolean) => void
    children?: React.ReactNode
}

export const getActions = (confirmStyle: ButtonStyles): ActionsRenderer => {
    return ({ onConfirm, onCancel, confirmLabel, cancelLabel, hasCancelCallback }) => {
        const confirmAction: ActionProps = { label: confirmLabel, style: confirmStyle, onClick: onConfirm }
        const cancelAction: ActionProps = { label: cancelLabel, style: 'light', onClick: onCancel }

        if (!hasCancelCallback && !onConfirm) {
            return [confirmAction]
        }

       return [cancelAction, confirmAction]
    }
}

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
    const { t } = useTranslation('common')
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
        confirmLabel: confirmLabel || t('action.accept'),
        cancelLabel: cancelLabel || t('action.cancel'),
        hasCancelCallback: !!onCancel,
    })

    return (
        <Modal
            open={customOpen || open}
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
