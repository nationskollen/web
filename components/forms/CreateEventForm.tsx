import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useAsyncCallback } from 'react-async-hook'
import { useForm, useFormContext } from 'react-hook-form'
import { useApi, useUpload, useLocations, useCategories } from '@nationskollen/sdk'

import {
    CollectionIcon,
    ClockIcon,
    PhotographIcon,
    CalendarIcon,
    PlusIcon,
    PencilIcon,
    LocationMarkerIcon,
} from '@heroicons/react/outline'

import { useAuth } from '@contexts/Auth'
import Notifications from '@notifications'
import { combineToDateString } from '@utils'
import { DEFAULT_MODAL_FORM_PROPS } from '@constants'

import Form from '@common/Form'
import Input from '@common/Input'
import Button from '@common/Button'
import Checkbox from '@common/Checkbox'
import Textarea from '@common/Textarea'
import InputGroup from '@common/InputGroup'
import RadioGroup from '@common/RadioGroup'
import Select, { OptionItem } from '@common/Select'
import FileUploadInput from '@common/FileUploadInput'

import ErrorDialog from '@dialogs/ErrorDialog'

export type LocationSelectionTypes =
    | 'default'
    | 'custom'

export interface FormValues {
    title: string
    shortDescription: string
    description: string
    occursAt: string
    occursAtHour: string
    endsAt: string
    endsAtHour: string
    membersOnly: boolean
    studentsOnly: boolean
    locationType: LocationSelectionTypes
    category?: OptionItem
    location?: OptionItem
    address?: string
    image?: FileList
}

const CreateEventForm = () => {
    const api = useApi()
    const { oid } = useAuth()
    const { t } = useTranslation(['common', 'admin-events'])
    const form = useForm<FormValues>({
        ...DEFAULT_MODAL_FORM_PROPS,
        defaultValues: {
            locationType: 'default',
            membersOnly: false,
            studentsOnly: false,
        },
    })

    const uploader = useUpload(api.events.upload)
    const creator = useAsyncCallback(api.events.create)

    const success = () => {
        form.reset()
        Notifications.success('Event created')
    }

    const submit = (data: FormValues) => {
        console.log(data)

        creator.execute(oid, {
            name: data.title,
            short_description: data.shortDescription,
            long_description: data.description,
            category_id: data.category?.id as number,
            occurs_at: combineToDateString(data.occursAt, data.occursAtHour),
            ends_at: combineToDateString(data.endsAt, data.endsAtHour),
            only_members: data.membersOnly,
            only_students: data.studentsOnly,
        })
    }

    useEffect(() => {
        if (!creator.result) {
            return
        }

        const images = form.getValues().image

        if (!images || images.length === 0) {
            success()
            return
        }

        uploader.execute(creator.result.id, images[0])
    }, [creator.result])

    useEffect(() => {
        if (!uploader.result) {
            return
        }

        success()
    }, [uploader.result])

    return (
        <>
            {creator.error && (
                <ErrorDialog
                    title="Kunde inte skapa event"
                    description="N[got blev fel]"
                />
            )}
            {uploader.error && (
                <ErrorDialog
                    title="Kunde inte ladda upp omslagsbild"
                    description="N[got blev fel]"
                />
            )}
            <Form
                submit={submit}
                sections={[
                    {
                        href: '#general',
                        title: t('admin-events:create.initial_details.title'),
                        component: InitialDetails,
                        icon: CalendarIcon,
                    },
                    {
                        href: '#description',
                        title: t('admin-events:create.description.title'),
                        component: LongDescription,
                        icon: PencilIcon,
                    },
                    {
                        href: '#time',
                        title: t('admin-events:create.time.title'),
                        component: Time,
                        icon: ClockIcon,
                    },
                    {
                        href: '#location',
                        title: t('admin-events:create.location.title'),
                        component: Location,
                        icon: LocationMarkerIcon,
                    },
                    {
                        href: '#cover',
                        title: t('admin-events:create.cover_image.title'),
                        component: ImageSelect,
                        icon: PhotographIcon,
                    },
                ]}
            >
                <Button
                    type="submit"
                    style="primary"
                    radius="large"
                    loading={creator.loading}
                    className="self-end"
                >
                    <span>{t('common:action.create')}</span>
                    <PlusIcon />
                </Button>
            </Form>
        </>
    )
}

const InitialDetails = () => {
    const { register } = useFormContext()
    const { data, isValidating } = useCategories()
    const { t } = useTranslation(['admin-events', 'common'])

    const options = data
        ? data.map((category) => ({
              id: category.id,
              value: category.name,
          }))
        : []

    return (
        <>
            <Input
                type="text"
                label={t('admin-events:create.field.title')}
                {...register('title', { required: t('common:validation.required') })}
            />
            <Select
                label={t('admin-events:create.field.category')}
                buttonIcon={CollectionIcon}
                initialSelection={0}
                initialOptions={[{ id: 0, value: t('common:selection.none') }]}
                options={options}
                loading={isValidating}
                {...register('category', {
                    required: t('common:validation.required'),
                })}
            />
            <Textarea
                initialSize="small"
                label={t('admin-events:create.field.short_description')}
                {...register('shortDescription', {
                    required: t('common:validation.required'),
                })}
            />
            <InputGroup className="mt-md">
                <Checkbox
                    label={t('admin-events:create.field.members_only')}
                    checked={false}
                    {...register('membersOnly')}
                />
                <Checkbox
                    label={t('admin-events:create.field.students_only')}
                    checked={false}
                    {...register('studentsOnly')}
                />
            </InputGroup>
        </>
    )
}

const LongDescription = () => {
    const { register } = useFormContext()
    const { t } = useTranslation(['admin-events', 'common'])

    return (
        <>
            <Textarea
                initialSize="large"
                label={t('admin-events:create.field.description')}
                {...register('description', { required: t('common:validation.required') })}
            />
        </>
    )
}

const Time = () => {
    const { register } = useFormContext()
    const { t } = useTranslation(['admin-events', 'common'])

    return (
        <>
            <InputGroup>
                <Input
                    type="date"
                    label={t('admin-events:create.field.occurs_at')}
                    {...register('occursAt', {
                        required: t('common:validation.required'),
                    })}
                />
                <Input
                    type="time"
                    label={t('admin-events:create.field.occurs_at_hour')}
                    {...register('occursAtHour', {
                        required: t('common:validation.required'),
                    })}
                />
            </InputGroup>
            <InputGroup>
                <Input
                    type="date"
                    label={t('admin-events:create.field.ends_at')}
                    {...register('endsAt', {
                        required: t('common:validation.required'),
                    })}
                />
                <Input
                    type="time"
                    label={t('admin-events:create.field.ends_at_hour')}
                    {...register('endsAtHour', {
                        required: t('common:validation.required'),
                    })}
                />
            </InputGroup>
        </>
    )
}

const Location = () => {
    const { oid } = useAuth()
    const { register } = useFormContext()
    const [locationType, setLocationType] = useState<LocationSelectionTypes>('default')
    const { data, isValidating } = useLocations(oid!)
    const { t } = useTranslation(['admin-events', 'common'])

    const locations = data
        ? data.map((location) => ({
              id: location.id,
              value: location.name,
          }))
        : []

    return (
        <>
            <RadioGroup
                title={t('admin-events:create.location.type')}
                value={locationType}
                onSelect={(value: string) => setLocationType(value as LocationSelectionTypes)}
                direction="row"
                itemClassName="flex-1"
                items={[
                    { value: 'default', label: t('admin-events:create.location.default') },
                    { value: 'custom', label: t('admin-events:create.location.custom') },
                ]}
                {...register('locationType')}
            />
            {locationType === 'default' ? (
                <Select
                    label={t('admin-events:create.field.location')}
                    buttonIcon={LocationMarkerIcon}
                    options={locations}
                    loading={isValidating}
                    {...register('location')}
                />
            ) : (
                <Input
                    type="text"
                    label={t('admin-events:create.field.address')}
                    {...register('address')}
                />
            )}
        </>
    )
}

const ImageSelect = () => {
    const { register } = useFormContext()
    const { t } = useTranslation(['admin-events', 'common'])

    return (
        <>
            <FileUploadInput
                label={t('admin-events:create.field.cover_image')}
                {...register('image')}
            />
        </>
    )
}

export default CreateEventForm
