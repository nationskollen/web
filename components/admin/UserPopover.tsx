import React, { useState, useCallback } from 'react'
import { useAuth } from '@contexts/Auth'
import { LogoutIcon, MoonIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

import Button from '@common/Button'
import Popover from '@common/Popover'
import Checkbox from '@common/Checkbox'
import PopoverSection from '@common/PopoverSection'
import PopoverSectionItem from '@common/PopoverSectionItem'

export interface Props {}

const UserPopover = ({}: Props) => {
    const { logout } = useAuth()
    const [darkMode, setDarkMode] = useState(false)

    const changeTheme = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(e.target.checked)
    }, [])

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
            <PopoverSection>
                <p className="font-bold leading-none text-text-highlight">fredrik@engstrand.nu</p>
                <p className="text-sm font-bold text-primary-text">Admin</p>
            </PopoverSection>
            <PopoverSection>
                <PopoverSectionItem icon={MoonIcon} label="Tema">
                    <Checkbox onChange={changeTheme} checked={darkMode} />
                </PopoverSectionItem>
            </PopoverSection>
            <Button style="light" onClick={logout}>
                <span>Logga ut</span>
                <LogoutIcon />
            </Button>
        </Popover>
    )
}

export default UserPopover
