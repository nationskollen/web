import clsx from 'clsx'
import React from 'react'

export interface Props {
    current: number
    max: number
    multiColor?: boolean
}

const getProgressBarColor = (percentage: number) => {
    if (percentage < 50) {
        return 'bg-success'
    } else if (percentage < 60) {
        return 'bg-[yellow]'
    } else if (percentage < 80) {
        return 'bg-[orange]'
    } else {
        return 'bg-error'
    }
}

const ProgressBar = ({ max, current, multiColor }: Props) => {
    const percentage = (current / max) * 100

    return (
        <div className="w-full h-2 overflow-hidden rounded-sm mt-md bg-secondary-extra">
            <div
                className={clsx(
                    'h-full filter brightness-150',
                    multiColor ? getProgressBarColor(percentage) : 'bg-primary-extra'
                )}
                style={{
                    width: `${percentage}%`,
                }}
            />
        </div>
    )
}

export default ProgressBar
