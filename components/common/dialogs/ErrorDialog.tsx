import React from 'react'
import { ExclamationIcon } from '@heroicons/react/solid'
import BaseDialog, { ActionsRenderer, Props as BaseDialogProps } from '@common/dialogs/BaseDialog'

export interface Props extends Omit<BaseDialogProps, 'actions'> {
    actions?: ActionsRenderer
}

const ErrorDialog = ({ icon, actions, ...props }: Props) => {
    return (
        <BaseDialog
            icon={icon === undefined ? ExclamationIcon : icon}
            iconClassName="bg-error-highlight text-error-highlight-text"
            actions={
                actions ||
                (({ onConfirm, onCancel, confirmLabel, cancelLabel }) => [
                    { label: cancelLabel, style: 'light', onClick: onCancel },
                    { label: confirmLabel, style: 'error', onClick: onConfirm },
                ])
            }
            {...props}
        />
    )
}

export default ErrorDialog