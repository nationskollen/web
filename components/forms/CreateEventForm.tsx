import React from 'react'

import { useAuth } from '@contexts/Auth'
import { LocationMarkerIcon, CollectionIcon } from '@heroicons/react/outline'
import { useLocations, useCategories } from '@nationskollen/sdk'
import {
    ClockIcon,
    PhotographIcon,
    CalendarIcon,
    PlusIcon,
    ArrowRightIcon,
} from '@heroicons/react/solid'

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
    location?: number
    image?: Blob
}

const CreateEventForm = (props: ModalOpenProps) => {
    const submit = (data: FormValues) => {
        console.log(data)
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
    currentStep,
    totalSteps,
    next,
    close,
    register,
    setValue,
}: FormStepProps<FormValues>) => {
    const { data, isValidating } = useCategories()

    const options = data
        ? data.map((category) => ({
              id: category.id,
              value: category.name,
          }))
        : []

    return (
        <ModalContent.Wrapper>
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
                    autoFocus={true}
                    {...register('title', { required: true })}
                />
                <Select
                    label="Kategori"
                    buttonIcon={CollectionIcon}
                    options={options}
                    setValue={setValue}
                    loading={isValidating}
                    {...register('category')}
                />
                <Textarea
                    type="text"
                    label="Beskrivning"
                    {...register('description', { required: true })}
                />
            </ModalContent.Main>
            <ModalContent.Actions className="space-between">
                <Button style="light" size="medium" radius="large" onClick={close}>
                    <span>Avbryt</span>
                </Button>
                <Button style="primary" size="medium" radius="large" onClick={next}>
                    <span>Välj tid och plats</span>
                    <ArrowRightIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

const TimeAndLocation = ({
    currentStep,
    totalSteps,
    previous,
    next,
    register,
    setValue,
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
        <ModalContent.Wrapper>
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
                        autoFocus={true}
                        {...register('occursAt', { required: true })}
                    />
                    <Input
                        type="date"
                        label="Sluttid"
                        {...register('endsAt', { required: true })}
                    />
                </InputGroup>
                <Select
                    label="Plats"
                    buttonIcon={LocationMarkerIcon}
                    options={locations}
                    setValue={setValue}
                    loading={isValidating}
                    {...register('location')}
                />
            </ModalContent.Main>
            <ModalContent.Actions>
                <Button style="light" size="medium" radius="large" onClick={previous}>
                    <span>Tillbaka</span>
                </Button>
                <Button style="primary" size="medium" radius="large" onClick={next}>
                    <span>Välj bild</span>
                    <ArrowRightIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

const ImageSelect = ({
    currentStep,
    totalSteps,
    previous,
    register
}: FormStepProps<FormValues>) => {
    return (
        <ModalContent.Wrapper>
            <ModalContent.Header
                icon={PhotographIcon}
                title="Lägg till en bild"
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <ModalContent.Main>
                <FileUploadInput label="Omslagsbild" autoFocus={true} {...register('image')} />
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
