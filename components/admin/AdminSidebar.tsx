import React, { useState } from 'react'
import { LibraryIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'

import { useAuth } from '@contexts/Auth'
import { useNation } from '@nationskollen/sdk'

import Button from '@common/Button'
import Image from '@common/Image'
import GlobalSidebar from '@common/GlobalSidebar'
import AdminSettingsModal from '@components/admin/AdminSettingsModal'

const AdminSidebar = () => {
    const { token, oid, logout } = useAuth()
    const [settingsOpen, setSettingsOpen] = useState(false)

    // Make sure to "logout" if we are not authenticated
    // and prevent fetching data
    if (!token || !oid) {
        logout()
        return null
    }

    // TODO: Handle error
    const { data } = useNation(oid)

    return (
        <GlobalSidebar>
            <AdminSettingsModal open={settingsOpen} setOpen={setSettingsOpen} />
            <Image
                src={data?.icon_img_src}
                size="fill"
                className="h-12"
                fallbackClassName="p-sm"
                backgroundClassName="bg-transparent"
                fallbackIcon={LibraryIcon}
            />
            <div className="space-y-sm">
                <Button style="primary" size="icon" onClick={() => setSettingsOpen(!settingsOpen)}>
                    <CogIcon />
                </Button>
                <Button style="primary" size="icon" onClick={logout}>
                    <LogoutIcon />
                </Button>
            </div>
        </GlobalSidebar>
    )
}

export default AdminSidebar
