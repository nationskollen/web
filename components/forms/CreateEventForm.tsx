import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'next-i18next'

import {
    ClockIcon,
    PhotographIcon,
    CalendarIcon,
    PlusIcon,
    ArrowRightIcon,
    PencilIcon,
} from '@heroicons/react/solid'

import { useAuth } from '@contexts/Auth'
import Notifications from '@notifications'
import { DEFAULT_FORM_PROPS } from '@constants'
import { useAsyncCallback } from 'react-async-hook'
import { LocationMarkerIcon, CollectionIcon } from '@heroicons/react/outline'
import { useApi, useUpload, useLocations, useCategories } from '@nationskollen/sdk'

import Input from '@common/Input'
import Button from '@common/Button'
import Textarea from '@common/Textarea'
import InputGroup from '@common/InputGroup'
import ModalContent from '@common/ModalContent'
import Select, { OptionItem } from '@common/Select'
import FileUploadInput from '@common/FileUploadInput'
import { OpenProps as ModalOpenProps } from '@common/Modal'
import ModalForm, { FormStepProps } from '@common/ModalForm'

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
    image?: Blob
}

export interface ExtraProps {
    uploaderLoading: boolean
    creatorLoading: boolean
}

// TODO: Some SDK code is commented here because the current version has some type-errors
// I think it is okay to leave this here for now, since the code can be used later
const CreateEventForm = (props: ModalOpenProps) => {
    // const api = useApi()
    // const { oid } = useAuth()
    const form = useForm<FormValues>(DEFAULT_FORM_PROPS)
    const [isLoading, setIsLoading] = useState(false)

    // const uploader = useUpload(api.events.upload)
    // const creator = useAsyncCallback(api.events.create)

    const submit = (data: FormValues) => {
        console.log(data)
        setIsLoading(true)

        // Simulate a request
        setTimeout(() => {
            setIsLoading(false)
            form.reset()
            props.setOpen(false)
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

    // TODO: Replace with actual loading states
    const extraProps: ExtraProps = {
        creatorLoading: isLoading,
        uploaderLoading: isLoading,
    }

    return (
        <ModalForm
            form={form}
            href="#create"
            onSubmit={submit}
            extraProps={extraProps}
            steps={[
                (props) => <InitialDetails {...props} />,
                (props) => <LongDescription {...props} />,
                (props) => <TimeAndLocation {...props} />,
                (props) => <ImageSelect {...props} />,
            ]}
            {...props}
        />
    )
}

const InitialDetails = ({
    index,
    currentStep,
    totalSteps,
    next,
    close,
    register,
    setValue,
    clearErrors,
    formState: { errors },
}: FormStepProps<FormValues, ExtraProps>) => {
    const { data, isValidating } = useCategories()
    const { t } = useTranslation(['admin-events', 'common'])

    const options = data
        ? data.map((category) => ({
              id: category.id,
              value: category.name,
          }))
        : []

    return (
        <ModalContent.Wrapper key={index}>
            <ModalContent.Header
                icon={CalendarIcon}
                title={t('admin-events:create.initial_details.title')}
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <Input
                    type="text"
                    label={t('admin-events:create.field.title')}
                    error={errors.title}
                    {...register('title', { required: t('common:validation.required') })}
                />
                <Select
                    label={t('admin-events:create.field.category')}
                    buttonIcon={CollectionIcon}
                    options={options}
                    setValue={setValue}
                    loading={isValidating}
                    error={errors.category}
                    clearErrors={clearErrors}
                    {...register('category', {
                        required: t('common:validation.required'),
                    })}
                />
                <Textarea
                    type="text"
                    label={t('admin-events:create.field.short_description')}
                    error={errors.shortDescription}
                    {...register('shortDescription', {
                        required: t('common:validation.required'),
                    })}
                />
            </ModalContent.Main>
            <ModalContent.Actions className="space-between">
                <Button style="light" size="medium" radius="large" onClick={close}>
                    <span>{t('common:action.cancel')}</span>
                </Button>
                <Button
                    style="primary"
                    size="medium"
                    radius="large"
                    onClick={() => next({ fields: ['title', 'shortDescription', 'category'] })}
                >
                    <span>{t('admin-events:create.description.title')}</span>
                    <ArrowRightIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

const LongDescription = ({
    index,
    currentStep,
    totalSteps,
    next,
    previous,
    register,
    formState: { errors },
}: FormStepProps<FormValues, ExtraProps>) => {
    const { t } = useTranslation(['admin-events', 'common'])

    return (
        <ModalContent.Wrapper key={index}>
            <ModalContent.Header
                icon={PencilIcon}
                title={t('admin-events:create.description.title')}
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <Textarea
                    type="text"
                    label={t('admin-events:create.field.description')}
                    error={errors.description}
                    {...register('description')}
                />
            </ModalContent.Main>
            <ModalContent.Actions className="space-between">
                <Button style="light" size="medium" radius="large" onClick={previous}>
                    <span>{t('common:action.back')}</span>
                </Button>
                <Button
                    style="primary"
                    size="medium"
                    radius="large"
                    onClick={() => next({ fields: ['description'] })}
                >
                    <span>{t('admin-events:create.time_and_location.title')}</span>
                    <ArrowRightIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

const TimeAndLocation = ({
    index,
    currentStep,
    totalSteps,
    previous,
    next,
    register,
    setValue,
    clearErrors,
    formState: { errors },
}: FormStepProps<FormValues, ExtraProps>) => {
    const { oid } = useAuth()
    const { data, isValidating } = useLocations(oid!)
    const { t } = useTranslation(['admin-events', 'common'])

    const locations = data
        ? data.map((location) => ({
              id: location.id,
              value: location.name,
          }))
        : []

    return (
        <ModalContent.Wrapper key={index}>
            <ModalContent.Header
                icon={ClockIcon}
                title={t('admin-events:create.time_and_location.title')}
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <InputGroup>
                    <Input
                        type="date"
                        label={t('admin-events:create.field.occurs_at')}
                        error={errors.occursAt}
                        {...register('occursAt', {
                            required: t('common:validation.required'),
                        })}
                    />
                    <Input
                        type="date"
                        label={t('admin-events:create.field.ends_at')}
                        error={errors.endsAt}
                        {...register('endsAt', {
                            required: t('common:validation.required'),
                        })}
                    />
                </InputGroup>
                <Select
                    label={t('admin-events:create.field.location')}
                    buttonIcon={LocationMarkerIcon}
                    options={locations}
                    setValue={setValue}
                    loading={isValidating}
                    error={errors.location}
                    clearErrors={clearErrors}
                    {...register('location')}
                />
            </ModalContent.Main>
            <ModalContent.Actions>
                <Button style="light" size="medium" radius="large" onClick={previous}>
                    <span>{t('common:action.back')}</span>
                </Button>
                <Button
                    style="primary"
                    size="medium"
                    radius="large"
                    onClick={() => next({ fields: ['occursAt', 'endsAt', 'location'] })}
                >
                    <span>{t('admin-events:create.cover_image.title')}</span>
                    <ArrowRightIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

const ImageSelect = ({
    index,
    currentStep,
    totalSteps,
    previous,
    register,
    setValue,
    formState: { errors },
    extra,
}: FormStepProps<FormValues, ExtraProps>) => {
    const { t } = useTranslation(['admin-events', 'common'])

    return (
        <ModalContent.Wrapper key={index}>
            <ModalContent.Header
                icon={PhotographIcon}
                title={t('admin-events:create.cover_image.title')}
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <FileUploadInput
                    label={t('admin-events:create.field.cover_image')}
                    loading={extra?.uploaderLoading}
                    setValue={setValue}
                    error={errors.image}
                    {...register('image')}
                />
            </ModalContent.Main>
            <ModalContent.Actions>
                <Button style="light" size="medium" radius="large" onClick={previous}>
                    <span>{t('common:action.back')}</span>
                </Button>
                <Button
                    type="submit"
                    style="primary"
                    size="medium"
                    radius="large"
                    loading={extra?.creatorLoading}
                >
                    <span>{t('common:action.create')}</span>
                    <PlusIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

export default CreateEventForm
