import React, { useCallback } from 'react'
import { useAuth } from '@contexts/Auth'
import { useTranslation } from 'next-i18next'
import { Theme, useTheme } from '@contexts/Theme'
import {
    EyeIcon,
    LogoutIcon,
    SunIcon,
    MoonIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    UserIcon,
} from '@heroicons/react/outline'

import Button from '@common/Button'
import Popover from '@common/Popover'
import RadioGroup from '@common/RadioGroup'
import RadioPillItem from '@common/RadioPillItem'
import PopoverSection from '@common/PopoverSection'

const UserPopover = () => {
    const { logout } = useAuth()
    const { t } = useTranslation('common')
    const { theme, setTheme } = useTheme()

    const changeTheme = useCallback((value: string) => {
        setTheme(value as Theme)
    }, [])

    return (
        <Popover
            cardClassName="w-user-popover"
            style="primary-extra"
            radius="large"
            className="px-xsm"
            button={(open) => (
                <>
                    <span>Fredrik Engstrand</span>
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </>
            )}
        >
            <PopoverSection className="flex flex-row items-center">
                <div className="rounded-full p-sm dark:bg-border-dark bg-border mr-sm">
                    <UserIcon className="w-5 h-5" />
                </div>
                <div>
                    <p className="font-bold leading-none text-text-highlight">
                        fredrik@engstrand.nu
                    </p>
                    <p className="text-sm font-bold text-primary-text">Admin</p>
                </div>
            </PopoverSection>
            <PopoverSection>
                <RadioGroup
                    as={RadioPillItem}
                    onChange={changeTheme}
                    title="Tema"
                    value={theme}
                    className="flex flex-row items-center justify-between space-x-sm"
                    itemClassName="flex-1"
                    noCheckmark={true}
                    items={[
                        { value: Theme.Light, label: 'Ljust', icon: SunIcon },
                        { value: Theme.Dark, label: 'Mörkt', icon: MoonIcon },
                        { value: Theme.Auto, label: 'Auto', icon: EyeIcon },
                    ]}
                />
            </PopoverSection>
            <Button
                style="primary"
                focus="primary"
                onClick={logout}
                className="w-full"
                size="medium"
            >
                <span>{t('auth.logout')}</span>
                <LogoutIcon />
            </Button>
        </Popover>
    )
}

export default UserPopover
