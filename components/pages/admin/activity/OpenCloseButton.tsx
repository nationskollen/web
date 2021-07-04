import React, { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useAsyncCallback } from 'react-async-hook'
import { useApi, Location, LocationCollection } from '@nationskollen/sdk'

import Button from '@common/Button'
import ErrorDialog from '@dialogs/ErrorDialog'

export interface Props {
    location: Location
    locations: LocationCollection
    mutate: any
}

const OpenCloseButton = ({ location, locations, mutate }: Props) => {
    const api = useApi()
    const { t } = useTranslation('admin-activity')
    const [open, setOpen] = useState(location.is_open)
    const { result, error, loading, execute } = useAsyncCallback(api.locations.setOpen)

    const handleClick = () => {
        execute(location.id, !open)
    }

    useEffect(() => {
        if (!result) {
            return
        }

        // Update the open state once we get a confirmed response
        // from the server.
        setOpen(result.is_open)

        // Mutate the cache to force rerender of the activity dashboard.
        // Since the updated location is returned from the request, there is
        // no need to revalidate the data.
        const mutatedLocations = locations.map((item) => {
            if (item.id === location.id) {
                return result
            } else {
                return item
            }
        })

        mutate(mutatedLocations, false)
    }, [result])

    return (
        <>
            {error && (
                <ErrorDialog
                    title={`Kunde inte ${open ? 'stänga' : 'öppna'} platsen`}
                    description="Något blev fel"
                />
            )}
            <Button
                style={open ? 'error-border' : 'success'}
                size="medium"
                loading={loading}
                onClick={handleClick}
            >
                <span>{open ? t('activity.close') : t('activity.open')}</span>
            </Button>
        </>
    )
}

export default OpenCloseButton
