import React from 'react'

import {
    ClockIcon,
    PhotographIcon,
    CalendarIcon,
    PlusIcon,
    ArrowRightIcon,
} from '@heroicons/react/solid'

import { useAuth } from '@contexts/Auth'
import Notifications from '@notifications'
import { UseFormReturn } from 'react-hook-form'
import { useLocations, useCategories } from '@nationskollen/sdk'
import { LocationMarkerIcon, CollectionIcon } from '@heroicons/react/outline'

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
    description: string
    occursAt: Date
    endsAt: Date
    membersOnly: boolean
    requiresCard: boolean
    category?: OptionItem
    location?: OptionItem
    image?: Blob
}

const CreateEventForm = (props: ModalOpenProps) => {
    const submit = (data: FormValues, form: UseFormReturn<FormValues>) => {
        console.log(data)

        form.reset()
        props.setOpen(false)
        Notifications.success('Event created')
    }

    return (
        <ModalForm
            href="#create"
            onSubmit={submit}
            steps={[
                (props) => <InitialDetails {...props} />,
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
}: FormStepProps<FormValues>) => {
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
                    label="Beskrivning"
                    error={errors.description}
                    {...register('description', { required: 'Detta fält är obligatoriskt' })}
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
                    onClick={() => next({ fields: ['title', 'description', 'category'] })}
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
}: FormStepProps<FormValues>) => {
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
}: FormStepProps<FormValues>) => {
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
                    setValue={setValue}
                    error={errors.image}
                    {...register('image', { required: 'Du måste ladda upp en bild' })}
                />
            </ModalContent.Main>
            <ModalContent.Actions>
                <Button style="light" size="medium" radius="large" onClick={previous}>
                    <span>Tillbaka</span>
                </Button>
                <Button type="submit" style="primary" size="medium" radius="large">
                    <span>Skapa</span>
                    <PlusIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

export default CreateEventForm
