import Router from 'next/router'
import { useTranslation } from 'next-i18next'
import { EyeIcon, SunIcon, MoonIcon } from '@heroicons/react/outline'

import { useTheme, Theme } from '@contexts/Theme'

import Select, { OptionItem } from '@common/Select'
import CardTitle from '@common/CardTitle'
import Modal, { OpenProps as ModalOpenProps } from '@common/Modal'

import USAFlag from '@svg/flags/USAFlag'
import SwedenFlag from '@svg/flags/SwedenFlag'

export interface Props extends ModalOpenProps {}

const AdminSettingsModal = ({ open, setOpen }: Props) => {
    const { t } = useTranslation('common')
    const { theme, setTheme } = useTheme()

    const changeTheme = (item: OptionItem) => {
        setTheme(item.id as Theme)
    }

    const changeLanguage = (item: OptionItem) => {
        Router.push(Router.asPath, undefined, { locale: item.id as string })
    }

    return (
        <Modal open={open} setOpen={setOpen} href="#settings">
            <CardTitle title={t('settings.title')} />
            <div className="space-y-md mt-sm">
                <Select
                    label={t('theme.title')}
                    onSelect={changeTheme}
                    initialSelection={theme}
                    options={[
                        { id: Theme.Light, value: t('theme.light'), icon: SunIcon },
                        { id: Theme.Dark, value: t('theme.dark'), icon: MoonIcon },
                        { id: Theme.Auto, value: t('theme.auto'), icon: EyeIcon },
                    ]}
                />
                <Select
                    label={t('locale.title')}
                    onSelect={changeLanguage}
                    initialSelection={Router.locale || 'se'}
                    options={[
                        { id: 'se', value: t('locale.swedish'), icon: SwedenFlag },
                        { id: 'en', value: t('locale.english'), icon: USAFlag },
                    ]}
                />
            </div>
        </Modal>
    )
}

export default AdminSettingsModal
