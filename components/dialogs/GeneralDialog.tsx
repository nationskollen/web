import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/solid'
import BaseDialog, {
    getActions,
    ActionsRenderer,
    Props as BaseDialogProps,
} from '@dialogs/BaseDialog'

export interface Props extends Omit<BaseDialogProps, 'actions'> {
    actions?: ActionsRenderer
}

const GeneralDialog = ({ icon, actions, ...props }: Props) => {
    return (
        <BaseDialog
            icon={icon === undefined ? InformationCircleIcon : icon}
            iconStyle="primary"
            actions={actions || getActions('primary')}
            {...props}
        />
    )
}

export default GeneralDialog
