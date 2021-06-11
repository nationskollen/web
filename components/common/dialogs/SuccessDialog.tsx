import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import BaseDialog, { ActionsRenderer, Props as BaseDialogProps } from '@common/dialogs/BaseDialog'

export interface Props extends Omit<BaseDialogProps, 'actions'> {
    actions?: ActionsRenderer
}

const SuccessDialog = ({ icon, actions, ...props }: Props) => {
    return (
        <BaseDialog
            icon={icon === undefined ? StarIcon : icon}
            iconStyle="success"
            actions={
                actions ||
                (({ onConfirm, onCancel, confirmLabel, cancelLabel }) => [
                    { label: cancelLabel, style: 'light', onClick: onCancel },
                    { label: confirmLabel, style: 'success', onClick: onConfirm },
                ])
            }
            {...props}
        />
    )
}

export default SuccessDialog
