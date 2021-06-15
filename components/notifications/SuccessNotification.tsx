import { toast } from 'react-hot-toast'
import { CheckIcon } from '@heroicons/react/outline'

import IconCircle from '@common/IconCircle'
import BaseNotification from './BaseNotification'

const SuccessNotification = (title: string) =>
    toast.custom((t) => {
        return (
            <BaseNotification visible={t.visible} id={t.id}>
                <IconCircle size="small" style="success" icon={CheckIcon} />
                <p>{title}</p>
            </BaseNotification>
        )
    })

export default SuccessNotification
