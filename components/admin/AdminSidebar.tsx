import React, { useState } from 'react'
import { CogIcon, LogoutIcon } from '@heroicons/react/outline'

import { useAuth } from '@contexts/Auth'
import { useNation } from '@nationskollen/sdk'

import Button from '@common/Button'
import NationIcon from '@common/NationIcon'
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
            <NationIcon src={data?.icon_img_src} href="/admin/dashboard" />
            <div className="space-y-sm">
                <Button style="primary" onClick={() => setSettingsOpen(!settingsOpen)}>
                    <CogIcon />
                </Button>
                <Button style="primary" onClick={logout}>
                    <LogoutIcon />
                </Button>
            </div>
        </GlobalSidebar>
    )
}

export default AdminSidebar
