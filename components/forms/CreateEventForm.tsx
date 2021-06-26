import React, { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useForm, useFormContext } from 'react-hook-form'

import {
    ClockIcon,
    PhotographIcon,
    CalendarIcon,
    PlusIcon,
    PencilIcon,
} from '@heroicons/react/solid'

import { useAuth } from '@contexts/Auth'
import Notifications from '@notifications'
import { DEFAULT_MODAL_FORM_PROPS } from '@constants'
import { useAsyncCallback } from 'react-async-hook'
import { LocationMarkerIcon, CollectionIcon } from '@heroicons/react/outline'
import { useApi, useUpload, useLocations, useCategories } from '@nationskollen/sdk'

import Form from '@common/Form'
import Input from '@common/Input'
import Button from '@common/Button'
import Textarea from '@common/Textarea'
import InputGroup from '@common/InputGroup'
import Select, { OptionItem } from '@common/Select'
import FileUploadInput from '@common/FileUploadInput'

export interface FormValues {
    title: string
    shortDescription: string
    description?: string
    occursAt: Date
    endsAt: Date
    membersOnly: boolean
    studentsOnly: boolean
    category?: OptionItem
    location?: OptionItem
    image?: FileList
}

// TODO: Some SDK code is commented here because the current version has some type-errors
// I think it is okay to leave this here for now, since the code can be used later
const CreateEventForm = () => {
    // const api = useApi()
    // const { oid } = useAuth()
    const { t } = useTranslation(['common', 'admin-events'])
    const form = useForm<FormValues>(DEFAULT_MODAL_FORM_PROPS)
    const [isLoading, setIsLoading] = useState(false)

    // const uploader = useUpload(api.events.upload)
    // const creator = useAsyncCallback(api.events.create)

    const submit = (data: FormValues) => {
        console.log(data)
        console.log(data.image && data.image[0])
        setIsLoading(true)

        // Simulate a request
        setTimeout(() => {
            setIsLoading(false)
            form.reset()
            Notifications.success('Event created')
        }, 500)

        // setIsLoading(true)
        // creator.execute(oid, {
        //     name: data.title,
        //     short_description: data.shortDescription,
        //     category_id: data.category?.id || 0,
        //     occurs_at: new Date(data.occursAt).toISOString(),
        //     ends_at: new Date(data.endsAt).toISOString(),
        //     only_members: data.membersOnly,
        //     only_students: data.studentsOnly,
        //     cover_img_src: '',
        // })
    }

    // useEffect(() => {
    //     if (creator.result) {
    //         form.reset()
    //         props.setOpen(false)
    //         Notifications.success('Event created')
    //     }
    // }, [creator.result])

    return (
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
                    title: t('admin-events:create.time_and_location.title'),
                    component: TimeAndLocation,
                    icon: ClockIcon,
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
                size="medium"
                radius="large"
                loading={isLoading}
            >
                <span>{t('common:action.create')}</span>
                <PlusIcon />
            </Button>
        </Form>
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
                initialOptions={[{ id: -1, value: t('common:selection.none') }]}
                options={options}
                loading={isValidating}
                {...register('category', {
                    required: t('common:validation.required'),
                })}
            />
            <Textarea
                type="text"
                label={t('admin-events:create.field.short_description')}
                {...register('shortDescription', {
                    required: t('common:validation.required'),
                })}
            />
        </>
    )
}

const LongDescription = () => {
    const { register } = useFormContext()
    const { t } = useTranslation(['admin-events', 'common'])

    return (
        <>
            <Textarea
                type="text"
                label={t('admin-events:create.field.description')}
                {...register('description')}
            />
        </>
    )
}

const TimeAndLocation = () => {
    const { oid } = useAuth()
    const { register } = useFormContext()
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
            <InputGroup>
                <Input
                    type="date"
                    label={t('admin-events:create.field.occurs_at')}
                    {...register('occursAt', {
                        required: t('common:validation.required'),
                    })}
                />
                <Input type="time" label={t('admin-events:create.field.ends_at')} />
            </InputGroup>
            <InputGroup>
                <Input
                    type="date"
                    label={t('admin-events:create.field.ends_at')}
                    {...register('endsAt', {
                        required: t('common:validation.required'),
                    })}
                />
                <Input type="time" label={t('admin-events:create.field.ends_at')} />
            </InputGroup>
            <Select
                label={t('admin-events:create.field.location')}
                buttonIcon={LocationMarkerIcon}
                options={locations}
                loading={isValidating}
                {...register('location')}
            />
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
