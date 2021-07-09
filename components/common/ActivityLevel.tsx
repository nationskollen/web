import clsx from 'clsx'
import React from 'react'
import { useTranslation, TFunction } from 'next-i18next'
import { useActivity, Location, ActivityLevels } from '@nationskollen/sdk'

export interface Props {
    location: Location
}

const ACTIVITY_COLORS: Record<ActivityLevels, string> = {
    [ActivityLevels.Closed]: 'bg-activity-closed',
    [ActivityLevels.Low]: 'bg-activity-low',
    [ActivityLevels.Medium]: 'bg-activity-medium',
    [ActivityLevels.High]: 'bg-activity-high',
    [ActivityLevels.VeryHigh]: 'bg-activity-very-high',
    [ActivityLevels.Full]: 'bg-activity-full',
}

const getActivityString = (level: ActivityLevels, t: TFunction) => {
    switch (level) {
        case ActivityLevels.Closed:
            return t('common:activity.level.closed')
        case ActivityLevels.Low:
            return t('common:activity.level.low')
        case ActivityLevels.Medium:
            return t('common:activity.level.medium')
        case ActivityLevels.High:
            return t('common:activity.level.high')
        case ActivityLevels.VeryHigh:
            return t('common:activity.level.very_high')
        case ActivityLevels.Full:
            return t('common:activity.level.full')
    }
}

const ActivityLevel = ({ location }: Props) => {
    const { t } = useTranslation('common')
    const { level } = useActivity(location.id, { level: location.activity_level })
    const color = ACTIVITY_COLORS[level]

    return (
        <div className="flex flex-row items-center px-md">
            <span className={clsx('relative w-2 h-2 rounded-full mr-sm', color)}>
                {level !== ActivityLevels.Closed && (
                    <span
                        className={clsx(
                            'absolute inset-0 w-full h-full rounded-full animate-ping',
                            color
                        )}
                    />
                )}
            </span>
            <p className="font-bold text-text-highlight">{getActivityString(level, t)}</p>
        </div>
    )
}

export default ActivityLevel
