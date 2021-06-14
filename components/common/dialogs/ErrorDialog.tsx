import React from 'react'
import { ExclamationIcon } from '@heroicons/react/solid'
import BaseDialog, {
    getActions,
    ActionsRenderer,
    Props as BaseDialogProps,
} from '@common/dialogs/BaseDialog'

export interface Props extends Omit<BaseDialogProps, 'actions'> {
    actions?: ActionsRenderer
}

const ErrorDialog = ({ icon, actions, onCancel, ...props }: Props) => {
    return (
        <BaseDialog
            icon={icon === undefined ? ExclamationIcon : icon}
            iconStyle="error"
            actions={actions || getActions('error')}
            {...props}
        />
    )
}

export default ErrorDialog
