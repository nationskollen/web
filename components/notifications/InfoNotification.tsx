import { toast } from 'react-hot-toast'
import { ChatIcon } from '@heroicons/react/outline'

import IconCircle from '@common/IconCircle'
import BaseNotification from './BaseNotification'

const InfoNotification = (title: string) =>
    toast.custom((t) => {
        return (
            <BaseNotification visible={t.visible} id={t.id}>
                <IconCircle size="small" style="highlight" icon={ChatIcon} />
                <p>{title}</p>
            </BaseNotification>
        )
    })

export default InfoNotification
