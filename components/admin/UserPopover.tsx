import React from 'react'
import Router from 'next/router'
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

import USAFlag from '@svg/flags/USAFlag'
import SwedenFlag from '@svg/flags/SwedenFlag'

const UserPopover = () => {
    const { logout } = useAuth()
    const { t } = useTranslation('common')
    const { theme, setTheme } = useTheme()

    const changeTheme = (value: string) => {
        setTheme(value as Theme)
    }

    const changeLanguage = (locale: string) => {
        Router.push(Router.pathname, undefined, { locale })
    }

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
                    <p className="text-sm font-bold text-primary-text">{t('auth.role.admin')}</p>
                </div>
            </PopoverSection>
            <PopoverSection className="space-y-md">
                <RadioGroup
                    as={RadioPillItem}
                    onChange={changeTheme}
                    title={t('theme.title')}
                    value={theme}
                    direction="row"
                    itemClassName="flex-1"
                    noCheckmark={true}
                    items={[
                        { value: Theme.Light, label: t('theme.light'), icon: SunIcon },
                        { value: Theme.Dark, label: t('theme.dark'), icon: MoonIcon },
                        { value: Theme.Auto, label: t('theme.auto'), icon: EyeIcon },
                    ]}
                />
                <RadioGroup
                    as={RadioPillItem}
                    onChange={changeLanguage}
                    title={t('locale.title')}
                    value={Router.locale || 'se'}
                    direction="row"
                    itemClassName="flex-1"
                    items={[
                        { value: 'se', label: t('locale.swedish'), icon: SwedenFlag },
                        { value: 'en', label: t('locale.english'), icon: USAFlag },
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
