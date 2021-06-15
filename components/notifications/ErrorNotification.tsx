import { toast } from 'react-hot-toast'
import { ExclamationIcon } from '@heroicons/react/outline'

import IconCircle from '@common/IconCircle'
import BaseNotification from './BaseNotification'

const ErrorNotification = (title: string) =>
    toast.custom((t) => {
        return (
            <BaseNotification visible={t.visible} id={t.id} className="text-white bg-error">
                <IconCircle size="small" style="error" icon={ExclamationIcon} />
                <p>{title}</p>
            </BaseNotification>
        )
    })

export default ErrorNotification
