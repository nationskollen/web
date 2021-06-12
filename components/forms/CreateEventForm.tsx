import React from 'react'
import { Category } from '@nationskollen/sdk'
import { useForm, UseFormRegister } from 'react-hook-form'
import {
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
    register: UseFormRegister<any>
}

export interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

const CreateEventForm = ({ open, setOpen }: Props) => {
    const { register, handleSubmit } = useForm()

    const submit: SubmitCallback = (data) => {
        console.log(data)
    }

    return (
        <ModalSteps
            href="#create"
            open={open}
            setOpen={setOpen}
            noPadding={true}
            cardClassName="w-form-modal"
            cardTitleClassName="p-md"
            containerComponent={({ children }) => (
                <form onSubmit={handleSubmit(submit)}>
                    {children}
                </form>
            )}
            steps={[
                (props) => <InitialDetails register={register} {...props} />,
                (props) => <TimeAndLocation register={register} {...props} />,
                (props) => <ImageSelect register={register} {...props} />,
            ]}
        />
    )
}

const InitialDetails = ({ currentStep, totalSteps, next, close, register }: FormStepProps) => {
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
                    {...register('title', { required: true })}
                />
                <Textarea
                    type="text"
                    label="Beskrivning"
                    {...register('description', { required: true })}
                />
            </ModalContent.Main>
            <ModalContent.Actions className="space-between">
                <Button
                    style="light"
                    size="medium"
                    radius="large"
                    onClick={close}
                >
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

const TimeAndLocation = ({ currentStep, totalSteps, previous, next, register }: FormStepProps) => {
    return (
        <ModalContent.Wrapper>
            <ModalContent.Header
                icon={PhotographIcon}
                title="Välj tid och plats"
                description={`Steg ${currentStep + 1} / ${totalSteps}`}
                descriptionClassName="leading-none"
            />
            <ModalContent.Main>
                <InputGroup>
                    <Input
                        type="text"
                        label="Starttid"
                        {...register('occursAt', { required: true })}
                    />
                    <Input
                        type="text"
                        label="Sluttid"
                        {...register('endsAt', { required: true })}
                    />
                </InputGroup>
                <Input
                    type="text"
                    label="Plats"
                    {...register('location')}
                />
            </ModalContent.Main>
            <ModalContent.Actions>
                <Button
                    style="light"
                    size="medium"
                    radius="large"
                    onClick={previous}
                >
                    <span>Tillbaka</span>
                </Button>
                <Button
                    style="primary"
                    size="medium"
                    radius="large"
                    onClick={next}
                >
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
                <p>Bild</p>
            </ModalContent.Main>
            <ModalContent.Actions>
                <Button
                    style="light"
                    size="medium"
                    radius="large"
                    onClick={previous}
                >
                    <span>Tillbaka</span>
                </Button>
                <Button
                    type="submit"
                    style="primary"
                    size="medium"
                    radius="large"
                >
                    <span>Skapa</span>
                    <PlusIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

export default CreateEventForm
