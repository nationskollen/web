import React from 'react'

import { useAuth } from '@contexts/Auth'
import { LocationMarkerIcon, CollectionIcon } from '@heroicons/react/outline'
import { useLocations, useCategories } from '@nationskollen/sdk'
import { useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { ClockIcon, PhotographIcon, CalendarIcon, PlusIcon, ArrowRightIcon } from '@heroicons/react/solid'

import Input from '@common/Input'
import Button from '@common/Button'
import Select from '@common/Select'
import Textarea from '@common/Textarea'
import InputGroup from '@common/InputGroup'
import ModalContent from '@common/ModalContent'
import FileUploadInput from '@common/FileUploadInput'
import ModalSteps, { StepProps } from '@common/ModalSteps'

export interface FormValues {
    title: string
    description: string
    occursAt: Date
    endsAt: Date
    membersOnly: boolean
    requiresCard: boolean
    category?: number
    location?: number
    image?: Blob
}

export type SubmitCallback = (data: FormValues) => void

export interface FormStepProps extends StepProps {
    register: UseFormRegister<FormValues>
    setValue: UseFormSetValue<FormValues>
}

export interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

const CreateEventForm = ({ open, setOpen }: Props) => {
    const { register, handleSubmit, setValue } = useForm<FormValues>()

    const submit: SubmitCallback = (data) => {
        console.log(data)
    }

    const stepProps = (props: StepProps) => ({ register, setValue, ...props })

    return (
        <ModalSteps
            href="#create"
            open={open}
            setOpen={setOpen}
            noPadding={true}
            cardClassName="w-form-modal"
            cardTitleClassName="p-md"
            containerComponent={({ children }) => (
                <form onSubmit={handleSubmit(submit)}>{children}</form>
            )}
            steps={[
                (props) => <InitialDetails {...stepProps(props)} />,
                (props) => <TimeAndLocation {...stepProps(props)} />,
                (props) => <ImageSelect {...stepProps(props)} />,
            ]}
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
}: FormStepProps) => {
    const { data } = useCategories()

    const options = data
        ? data.map((category) => ({
              id: `category-${category.id}`,
              value: category.name,
          }))
        : []

    return (
        <ModalContent.Wrapper>
            <ModalContent.Header
                icon={CalendarIcon}
                title="Skapa ny event"
                description={`Steg ${currentStep + 1} / ${totalSteps}`}
                descriptionClassName="leading-none"
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

const TimeAndLocation = ({ currentStep, totalSteps, previous, next, register, setValue }: FormStepProps) => {
    const { oid } = useAuth()
    const { data } = useLocations(oid!)

    const locations = data
        ? data.map((location) => ({
            id: `location-${location.id}`,
            value: location.name,
        }))
        : []

    return (
        <ModalContent.Wrapper>
            <ModalContent.Header
                icon={ClockIcon}
                title="Tid och plats"
                description={`Steg ${currentStep + 1} / ${totalSteps}`}
                descriptionClassName="leading-none"
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

const ImageSelect = ({ currentStep, totalSteps, previous, register }: FormStepProps) => {
    return (
        <ModalContent.Wrapper>
            <ModalContent.Header
                icon={PhotographIcon}
                title="Lägg till en bild"
                description={`Steg ${currentStep + 1} / ${totalSteps}`}
                descriptionClassName="leading-none"
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
