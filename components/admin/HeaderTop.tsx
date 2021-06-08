/**
 * Renders the top of the admin header, i.e. the user and nation
 * information, as well as some common actions and settings.
 *
 * @module Header
 */
import Router from 'next/router'
import { useCallback } from 'react'

import Title from '@common/Title'
import Button from '@common/Button'
import { AUTH } from '@constants'
import { useAuth } from '@contexts/Auth'
import { useNation } from '@nationskollen/sdk'
import { LogoutIcon } from '@heroicons/react/outline'

const HeaderTop = () => {
    const { token, oid } = useAuth()

    const logout = useCallback(() => {
        localStorage.removeItem(AUTH.USER_STORAGE_KEY)
        Router.replace('/admin/login')
    }, [])

    // Make sure to "logout" if we are not authenticated
    // and prevent fetching data
    if (!token || !oid) {
        logout()
        return null
    }

    const { data, error } = useNation(oid)

    return (
        <section className="container py-3 mx-auto border-b-1 border-primary-extra">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-md">
                    {data && (
                        <>
                            <img src={data.icon_img_src} className="h-8" />
                            <Title text={data.name} className="text-white" />
                        </>
                    )}
                </div>
                <Button
                    style="transparent"
                    onClick={logout}
                    className="rounded border-1 border-primary-extra hover:bg-primary-extra"
                >
                    <span>Logga ut</span>
                    <LogoutIcon />
                </Button>
            </div>
        </section>
    )
}

export default HeaderTop
