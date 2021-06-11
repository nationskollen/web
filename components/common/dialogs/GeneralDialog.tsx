import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/solid'
import BaseDialog, { ActionsRenderer, Props as BaseDialogProps } from '@common/dialogs/BaseDialog'

export interface Props extends Omit<BaseDialogProps, 'actions'> {
    actions?: ActionsRenderer
}

const GeneralDialog = ({ icon, actions, ...props }: Props) => {
    return (
        <BaseDialog
            icon={icon === undefined ? InformationCircleIcon : icon}
            iconClassName="bg-primary-highlight text-primary dark:bg-primary-dark dark:text-primary-highlight"
            actions={
                actions ||
                (({ onConfirm, onCancel, confirmLabel, cancelLabel }) => [
                    { label: cancelLabel, style: 'light', onClick: onCancel },
                    { label: confirmLabel, style: 'primary', onClick: onConfirm },
                ])
            }
            {...props}
        />
    )
}

export default GeneralDialog
