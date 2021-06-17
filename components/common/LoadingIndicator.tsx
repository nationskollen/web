import clsx from 'clsx'
import React from 'react'

export type LoadingIndicatorSizes = 'small' | 'medium' | 'fill' | 'large'

const LOADING_INDICATOR_SIZES: Record<LoadingIndicatorSizes, string> = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    fill: 'h-full',
    large: 'w-16 w-16',
}

export interface Props {
    size?: LoadingIndicatorSizes
}

const LoadingIndicator = ({ size }: Props) => {
    const sizing = LOADING_INDICATOR_SIZES[size || 'fill']

    return (
        <svg
            className={clsx('animate-spin', sizing)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-30"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-100"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    )
}

export default LoadingIndicator
