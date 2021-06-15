import { toast } from 'react-hot-toast'
import { ChatAlt2Icon } from '@heroicons/react/outline'

import IconCircle from '@common/IconCircle'
import BaseNotification from './BaseNotification'

const InfoNotification = (title: string) =>
    toast.custom((t) => {
        return (
            <BaseNotification visible={t.visible} id={t.id}>
                <IconCircle size="small" style="primary" icon={ChatAlt2Icon} />
                <p>{title}</p>
            </BaseNotification>
        )
    })

export default InfoNotification
