/**
 * Renders the top of the admin header, i.e. the user and nation
 * information, as well as some common actions and settings.
 *
 * @module Header
 */
import Router from 'next/router'
import { useCallback } from 'react'
import { AUTH } from '@constants'
import { useAuth } from '@contexts/Auth'
import { useNation } from '@nationskollen/sdk'
import { LogoutIcon } from '@heroicons/react/outline'

import Title from '@common/Title'
import NationIcon from '@common/NationIcon'
import UserPopover from '@components/admin/UserPopover'

const HeaderTop = () => {
    const { token, oid, logout } = useAuth()

    // Make sure to "logout" if we are not authenticated
    // and prevent fetching data
    if (!token || !oid) {
        logout()
        return null
    }

    // TODO: Handle error
    const { data } = useNation(oid)

    return (
        <section className="container py-3 mx-auto border-b-1 border-primary-extra">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-md">
                    <NationIcon src={data?.icon_img_src} />
                    <Title text={data?.name} className="text-white" />
                </div>
                <div className="flex flex-row space-x-md">
                    <UserPopover />
                </div>
            </div>
        </section>
    )
}

export default HeaderTop
