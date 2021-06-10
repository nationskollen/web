import React, { useState, useCallback } from 'react'
import { useAuth } from '@contexts/Auth'
import { Theme, useTheme } from '@contexts/Theme'
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
    const { theme, setTheme } = useTheme()

    const changeTheme = useCallback((value: string) => {
        setTheme(value as Theme)
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
                    value={theme}
                    className="space-y-sm"
                    items={[
                        { value: Theme.Light, label: 'Ljust', icon: SunIcon },
                        { value: Theme.Dark, label: 'Mörkt', icon: MoonIcon },
                        { value: Theme.Auto, label: 'Auto', icon: EyeIcon },
                    ]}
                />
                <Button style="primary" onClick={logout} className="w-full mt-md" size="small">
                    <span>Logga ut</span>
                    <LogoutIcon />
                </Button>
            </PopoverSection>
        </Popover>
    )
}

export default UserPopover
