import clsx from 'clsx'
import React from 'react'

import Card from '@common/Card'

export interface Props {
    src?: string | null
    className?: string
    children?: React.ReactNode
}

const LocationCard = ({ src, className, children }: Props) => {
    return (
        <Card
            noPadding={false}
            className={clsx(
                'h-64 overflow-hidden',
                src && 'dark:border-0',
                className
            )}
        >
            <div className="absolute inset-0 w-full h-full z-behind">
                {src && (
                    <img
                        src={src}
                        className="object-cover w-full h-full rounded-sm"
                    />
                )}
            </div>
            <div
                className={clsx(
                    'absolute bottom-0 left-0 flex flex-col justify-end',
                    'w-full h-full rounded-sm p-md bg-card-overlay text-white',
                )}
            >
                {children}
            </div>
        </Card>
    )
}

export default LocationCard
