import React, { useState, useEffect } from 'react'
import { useApi } from '@nationskollen/sdk'
import { useTranslation } from 'next-i18next'
import { useAsyncCallback } from 'react-async-hook'

import Button from '@common/Button'
import ErrorDialog from '@dialogs/ErrorDialog'

export interface Props {
    locationId: number
    isOpen: boolean
}

const OpenCloseButton = ({ locationId, isOpen }: Props) => {
    const api = useApi()
    const [open, setOpen] = useState(isOpen)
    const { t } = useTranslation('admin-activity')
    const { result, error, loading, execute } = useAsyncCallback(api.locations.setOpen)

    const handleClick = () => {
        execute(locationId, !open)
    }

    useEffect(() => {
        if (!result) {
            return
        }

        // Update the open state once we get a confirmed response
        // from the server.
        setOpen(result.is_open)
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
