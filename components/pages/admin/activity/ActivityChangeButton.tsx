import React from 'react'
import { useApi } from '@nationskollen/sdk'
import { useTranslation } from 'next-i18next'
import { useAsyncCallback } from 'react-async-hook'
import { UserRemoveIcon, UserAddIcon } from '@heroicons/react/outline'

import Button from '@common/Button'
import ErrorDialog from '@dialogs/ErrorDialog'

export type ActivityChangeButtonTypes =
    | 'increase'
    | 'decrease'

export interface Props {
    locationId: number
    type: ActivityChangeButtonTypes
}

const ActivityChangeButton = ({ locationId, type }: Props) => {
    const api = useApi()
    const { t } = useTranslation('admin-activity')
    const { error, execute } = useAsyncCallback(api.locations.setActivity)

    const handleClick = () => {
        execute(locationId, { change: type === 'increase' ? 10 : -10 })
    }

    const Icon = type === 'increase' ? UserAddIcon : UserRemoveIcon
    const label = type === 'increase'
        ? t('activity.update.decrease_by_one')
        : t('activity.update.increase_by_one')

    return (
        <>
            {error && (
                <ErrorDialog
                    title="Kunde inte uppdatera aktivitet"
                    description="Något blev fel"
                />
            )}
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
