import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import BaseDialog, { getActions, ActionsRenderer, Props as BaseDialogProps } from '@common/dialogs/BaseDialog'

export interface Props extends Omit<BaseDialogProps, 'actions'> {
    actions?: ActionsRenderer
}

const SuccessDialog = ({ icon, actions, ...props }: Props) => {
    return (
        <BaseDialog
            icon={icon === undefined ? StarIcon : icon}
            iconStyle="success"
            actions={actions || getActions('success')}
            {...props}
        />
    )
}

export default SuccessDialog
