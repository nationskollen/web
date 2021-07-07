import React from 'react'
import { useApi } from '@nationskollen/sdk'
import { useTranslation } from 'next-i18next'
import { useAsyncCallback } from 'react-async-hook'
import { UserRemoveIcon, UserAddIcon } from '@heroicons/react/outline'

import Button from '@common/Button'

export type ActivityChangeButtonTypes =
    | 'increase'
    | 'decrease'

export interface Props {
    locationId: number
    type: ActivityChangeButtonTypes
}

// TODO: Add error handling
const ActivityChangeButton = ({ locationId, type }: Props) => {
    const api = useApi()
    const { t } = useTranslation('admin-activity')
    const { execute } = useAsyncCallback(api.locations.setActivity)

    const handleClick = () => {
        execute(locationId, { change: type === 'increase' ? 1 : -1 })
    }

    const Icon = type === 'increase' ? UserAddIcon : UserRemoveIcon
    const label = type === 'increase'
        ? t('activity.update.increase_by_one')
        : t('activity.update.decrease_by_one')

    return (
        <>
            <Button
                style={type === 'increase' ? 'success' : 'error'}
                size="auto"
                direction="column"
                className="text-lg"
                onClick={handleClick}
            >
                <Icon className="w-10 h-10" />
                <span>{label}</span>
            </Button>
        </>
    )
}

export default ActivityChangeButton
