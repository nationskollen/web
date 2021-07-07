import React, { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useAsyncCallback } from 'react-async-hook'
import { useApi, Location, LocationCollection, MutateFunction } from '@nationskollen/sdk'

import Button from '@common/Button'

export interface Props {
    location: Location
    locations: LocationCollection
    mutate: MutateFunction<LocationCollection>
}

// TODO: Add error handling
const OpenCloseButton = ({ location, locations, mutate }: Props) => {
    const api = useApi()
    const { t } = useTranslation('admin-activity')
    const [open, setOpen] = useState(location.is_open)
    const { status, loading, execute } = useAsyncCallback(api.locations.setOpen)

    const handleClick = () => {
        execute(location.id, !open)
    }

    useEffect(() => {
        if (status !== 'success') {
            return
        }

        // Mutate the cache to force rerender of the activity dashboard
        const mutatedLocations = locations.map((item) => {
            if (item.id === location.id) {
                return {
                    ...item,
                    is_open: !open,
                }
            } else {
                return item
            }
        })

        mutate(mutatedLocations, false)

        // Update the open state once we get a confirmed response
        // from the server.
        setOpen(!open)
    }, [status])

    return (
        <Button
            style={open ? 'error-border' : 'success'}
            size="medium"
            loading={loading}
            onClick={handleClick}
        >
            <span>{open ? t('activity.close') : t('activity.open')}</span>
        </Button>
    )
}

export default OpenCloseButton
