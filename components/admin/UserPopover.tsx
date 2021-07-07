import React, { useMemo } from 'react'
import Link from 'next/link'
import { useAuth } from '@contexts/Auth'
import { useTranslation } from 'next-i18next'
import { UserIcon, ArrowRightIcon } from '@heroicons/react/outline'

import Button from '@common/Button'
import Popover from '@common/Popover'
import PopoverSection from '@common/PopoverSection'

const UserPopover = () => {
    const { user } = useAuth()
    const { t } = useTranslation(['admin-common', 'common'])

    const initials = useMemo(() => {
        let acc = ''
        const strings = user.full_name.split(' ')

        for (const str of strings) {
            if (str.length === 0) {
                continue
            }

            acc += str[0].toUpperCase()
        }

        return acc
    }, [user])

    return (
        <Popover
            cardClassName="w-user-popover"
            button={() => (
                <Button style="secondary" size="medium" radius="large" className="w-10 h-10">
                    <p className="font-bold text-white">{initials}</p>
                </Button>
            )}
        >
            <PopoverSection className="flex flex-row items-center">
                <div className="rounded-full p-sm dark:bg-border-dark bg-border mr-sm">
                    <UserIcon className="w-5 h-5" />
                </div>
                <div>
                    <p className="font-bold leading-none text-text-highlight">{user.full_name}</p>
                    <p className="text-sm font-bold text-primary-text">
                        {user.nation_admin ? t('common:auth.role.admin') : 'common:auth.role.staff'}
                    </p>
                </div>
            </PopoverSection>
            <Link href="/admin/users/me" passHref={true}>
                <Button style="primary" size="medium" className="w-full">
                    <span>{t('admin-common:profile.show')}</span>
                    <ArrowRightIcon />
                </Button>
            </Link>
        </Popover>
    )
}

export default UserPopover
