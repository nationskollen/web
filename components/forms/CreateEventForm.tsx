import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

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
                title="Skapa ny event"
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <Input
                    type="text"
                    label="Titel"
                    error={errors.title}
                    {...register('title', { required: 'Detta fält är obligatoriskt' })}
                />
                <Select
                    label="Kategori"
                    buttonIcon={CollectionIcon}
                    options={options}
                    setValue={setValue}
                    loading={isValidating}
                    error={errors.category}
                    clearErrors={clearErrors}
                    {...register('category', { required: 'Detta fält är obligatoriskt' })}
                />
                <Textarea
                    type="text"
                    label="Kort beskrivning"
                    error={errors.shortDescription}
                    {...register('shortDescription', { required: 'Detta fält är obligatoriskt' })}
                />
            </ModalContent.Main>
            <ModalContent.Actions className="space-between">
                <Button style="light" size="medium" radius="large" onClick={close}>
                    <span>Avbryt</span>
                </Button>
                <Button
                    style="primary"
                    size="medium"
                    radius="large"
                    onClick={() => next({ fields: ['title', 'shortDescription', 'category'] })}
                >
                    <span>Beskrivning</span>
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
    return (
        <ModalContent.Wrapper key={index}>
            <ModalContent.Header
                icon={PencilIcon}
                title="Beskrivning"
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <Textarea
                    type="text"
                    label="Beskrivning"
                    error={errors.description}
                    {...register('description')}
                />
            </ModalContent.Main>
            <ModalContent.Actions className="space-between">
                <Button style="light" size="medium" radius="large" onClick={previous}>
                    <span>Tillbaka</span>
                </Button>
                <Button
                    style="primary"
                    size="medium"
                    radius="large"
                    onClick={() => next({ fields: ['description'] })}
                >
                    <span>Välj tid och plats</span>
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
                title="Tid och plats"
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <InputGroup>
                    <Input
                        type="date"
                        label="Starttid"
                        error={errors.occursAt}
                        {...register('occursAt', { required: true })}
                    />
                    <Input
                        type="date"
                        label="Sluttid"
                        error={errors.endsAt}
                        {...register('endsAt', { required: true })}
                    />
                </InputGroup>
                <Select
                    label="Plats"
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
                    <span>Tillbaka</span>
                </Button>
                <Button
                    style="primary"
                    size="medium"
                    radius="large"
                    onClick={() => next({ fields: ['occursAt', 'endsAt', 'location'] })}
                >
                    <span>Välj bild</span>
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
    return (
        <ModalContent.Wrapper key={index}>
            <ModalContent.Header
                icon={PhotographIcon}
                title="Lägg till en bild"
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <FileUploadInput
                    label="Omslagsbild"
                    loading={extra?.uploaderLoading}
                    setValue={setValue}
                    error={errors.image}
                    {...register('image')}
                />
            </ModalContent.Main>
            <ModalContent.Actions>
                <Button style="light" size="medium" radius="large" onClick={previous}>
                    <span>Tillbaka</span>
                </Button>
                <Button
                    type="submit"
                    style="primary"
                    size="medium"
                    radius="large"
                    loading={extra?.creatorLoading}
                >
                    <span>Skapa</span>
                    <PlusIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

export default CreateEventForm
