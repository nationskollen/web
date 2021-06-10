import React, { useState, useCallback } from 'react'
import { useAuth } from '@contexts/Auth'
import {
    EyeIcon,
    LogoutIcon,
    SunIcon,
    MoonIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from '@heroicons/react/outline'

import Button from '@common/Button'
import Popover from '@common/Popover'
import RadioGroup from '@common/RadioGroup'
import PopoverSection from '@common/PopoverSection'
import PopoverSectionItem from '@common/PopoverSectionItem'

export interface Props {}

const UserPopover = ({}: Props) => {
    const { logout } = useAuth()
    const [selectedTheme, setSelectedTheme] = useState('light')

    const changeTheme = useCallback((value: string) => {
        setSelectedTheme(value)
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
                <RadioGroup
                    as={PopoverSectionItem}
                    onChange={changeTheme}
                    title="Tema"
                    value={selectedTheme}
                    className="space-y-sm"
                    items={[
                        { value: 'light', label: 'Ljust', icon: SunIcon },
                        { value: 'dark', label: 'Mörkt', icon: MoonIcon },
                        { value: 'auto', label: 'Auto', icon: EyeIcon },
                    ]}
                />
            </PopoverSection>
            <Button style="light" onClick={logout}>
                <span>Logga ut</span>
                <LogoutIcon />
            </Button>
        </Popover>
    )
}

export default UserPopover
