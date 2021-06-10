import React from 'react'
import { useAuth } from '@contexts/Auth'
import { LogoutIcon, MoonIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import Button from '@common/Button'
import Popover from '@common/Popover'

export interface Props {}

const UserPopover = ({}: Props) => {
    const { logout } = useAuth()

    return (
        <Popover
            cardClassName="w-user-popover"
            buttonStyle="primary-extra"
            buttonClassName="px-xsm rounded"
            button={(open) => (
                <>
                    <span>Fredrik Engstrand</span>
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </>
            )}
        >
            <section className="border-b-1 border-border pb-sm">
                <p className="font-bold leading-none text-text-highlight">fredrik@engstrand.nu</p>
                <p className="text-sm font-bold text-primary-text">Admin</p>
            </section>
            <section className="border-b-1 border-border py-sm mb-md">
                <div className="flex flex-row items-center space-x-sm">
                    <MoonIcon className="w-8 h-8 p-2 rounded-sm bg-primary-highlight text-primary" />
                    <p className="flex-1">Mörkt tema</p>
                    <Input type="checkbox" onChange={(e) => console.log(e)} />
                </div>
            </section>
            <Button style="light" onClick={logout}>
                <span>Logga ut</span>
                <LogoutIcon />
            </Button>
        </Popover>
    )
}

export default UserPopover
