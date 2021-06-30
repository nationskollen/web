import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { DEFAULT_FORM_PROPS } from '@constants'
import { UploadIcon, UserIcon, InformationCircleIcon, LockOpenIcon, } from '@heroicons/react/outline'

import Form from '@common/Form'
import Image from '@common/Image'
import Input from '@common/Input'
import Column from '@common/Column'
import Button from '@common/Button'
import Textarea from '@common/Textarea'
import InputGroup from '@common/InputGroup'
import RadioGroup from '@common/RadioGroup'
import FormSection from '@common/FormSection'
import FormSubSection from '@common/FormSubSection'
import SubmitButton from '@common/SubmitButton'

import ErrorDialog from '@dialogs/ErrorDialog'

export interface FormValues {
    email?: string
    full_name?: string
    password?: string
    avatar?: FileList
}

const ProfileForm = () => {
    const { query } = useRouter()
    const { t } = useTranslation(['admin-users', 'admin-common', 'common'])
    const [userActive, setUserActive] = useState(true)
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [showActiveDialog, setShowActiveDialog] = useState(false)
    const form = useForm<FormValues>(DEFAULT_FORM_PROPS)

    const submit = (values: FormValues) => {
        console.log(values)
    }

    const confirmActiveSelection = () => {
        // If we want to disable the user
        if (userActive === true) {
            setShowActiveDialog(true)
        } else {
            // Enabling a user does no really require a confirmation
            // since the action is not as destructive as disabling
            setUserActive(true)
        }
    }

    return (
        <Column>
            <ErrorDialog
                open={showActiveDialog}
                setOpen={setShowActiveDialog}
                title={t('admin-users:profile.dialog.deactivate.title')}
                description={t('admin-users:profile.dialog.deactivate.description')}
                onConfirm={() => setUserActive(false)}
                confirmLabel={t('admin-users:profile.deactivate')}
            />
            <ErrorDialog
                open={showDeleteDialog}
                setOpen={setShowDeleteDialog}
                title={t('admin-users:profile.dialog.delete.title')}
                description={t('admin-users:profile.dialog.delete.description')}
                onConfirm={() => console.log('delete user')}
                confirmLabel={t('admin-users:profile.delete_user')}
            />
            <Form
                submit={submit}
                sidebarContent={(
                    <>
                        <Image src={null} size="huge" fallbackIcon={UserIcon} />
                        <Column className="mt-md">
                            <Button style="border" size="medium">
                                <span>{t('admin-users:profile.change_avatar')}</span>
                                <UploadIcon />
                            </Button>
                        </Column>
                    </>
                )}
            >
                <FormSection title={query.user_id === 'me' ? t('admin-users:me.title') : t('admin-users:profile.title')}>
                    <FormSubSection
                        icon={InformationCircleIcon}
                        title={t('admin-users:profile.details')}
                    >
                        <InputGroup>
                            <Input
                                type="text"
                                label={t('admin-users:profile.field.name')}
                                defaultValue="Fredrik Engstrand"
                            />
                            <Input
                                type="email"
                                label={t('common:auth.field.email.title')}
                                defaultValue="fredrik@engstrand.nu"
                            />
                        </InputGroup>
                        <Textarea label={t('admin-users:profile.field.description')} />
                    </FormSubSection>
                    <FormSubSection icon={LockOpenIcon} title={t('admin-users:profile.change_password')}>
                        <InputGroup>
                            <Input
                                type="password"
                                label={t('common:auth.field.password.title')}
                                placeholder={t('common:auth.field.password.placeholder')}
                            />
                            <Input
                                type="password"
                                label={t('common:auth.field.repeat_password.title')}
                                placeholder={t('common:auth.field.repeat_password.placeholder')}
                            />
                        </InputGroup>
                    </FormSubSection>
                    <SubmitButton type="save" label={t('common:action.save')} />
                </FormSection>
                <FormSection title={t('admin-common:form.danger_zone')} danger={true}>
                    <FormSubSection>
                        <RadioGroup
                            name="user-active"
                            title={t('admin-users:profile.field.active')}
                            value={userActive}
                            onSelect={confirmActiveSelection}
                            direction="row"
                            itemClassName="flex-1"
                            items={[
                                { value: true, label: t('admin-users:profile.active') },
                                { value: false, label: t('admin-users:profile.inactive') },
                            ]}
                        />
                    </FormSubSection>
                    <Column className="text-sm text-text-extra">
                        <p>
                            <pre className="whitespace-pre-line">{t('admin-users:profile.delete_description')}</pre>
                        </p>
                        <Button style="error" size="small" className="" onClick={() => setShowDeleteDialog(true)}>
                            <span>{t('admin-users:profile.delete_user')}</span>
                        </Button>
                    </Column>
                </FormSection>
            </Form>
        </Column>
    )
}

export default ProfileForm
