import { Category } from '@nationskollen/sdk'
import { Field, FieldProps, Formik, Form as FormikForm, FormikHelpers } from 'formik'

import {
    PhotographIcon,
    CalendarIcon,
    PlusIcon,
    ArrowRightIcon,
} from '@heroicons/react/solid'

import Input from '@common/Input'
import Button from '@common/Button'
import Textarea from '@common/Textarea'
import ModalSteps, { StepProps } from '@common/ModalSteps'
import ModalContent from '@common/ModalContent'

export type SubmitCallback = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => void

export interface FormValues {
    title: string
    category: Category | null
    description: string
    nationCard: string
    membersOnly: string
    email: string
}

export interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

export interface ImageSelectProps extends StepProps {
    submitForm: SubmitCallback
}

const CreateEventForm = ({ open, setOpen }: Props) => {
    const submitForm: SubmitCallback = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        console.log(values)

        // TODO: Set this to false when we get a response from the server
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={{
                email: '',
                title: '',
                category: null,
                description: '',
                nationCard: '',
                membersOnly: '',
            }}
            onSubmit={submitForm}
        >
            <FormikForm>
                <ModalSteps
                    href="#create"
                    open={open}
                    setOpen={setOpen}
                    noPadding={true}
                    cardClassName="w-form-modal"
                    cardTitleClassName="p-md"
                    steps={[
                        (props) => <InitialDetails {...props} />,
                        (props) => <TimeAndLocation {...props} />,
                        (props) => <ImageSelect submitForm={submitForm} {...props} />,
                    ]}
                />
            </FormikForm>
        </Formik>
    )
}

const InitialDetails = ({ currentStep, totalSteps, next, close }: StepProps) => {
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
                    id="title"
                    label="Titel"
                    type="text"
                    required
                />
                <Textarea
                    id="description"
                    label="Beskrivning"
                    type="text"
                    required
                />
                <Field type="email" name="email" placeholder="Email" />
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

const TimeAndLocation = ({ currentStep, totalSteps, previous, next }: StepProps) => {
    return (
        <ModalContent.Wrapper>
            <ModalContent.Header
                icon={PhotographIcon}
                title="Välj tid och plats"
                description={`Steg ${currentStep + 1} / ${totalSteps}`}
                descriptionClassName="leading-none"
            />
            <ModalContent.Main>
                <p>Tid och plats</p>
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

const ImageSelect = ({ currentStep, totalSteps, previous, submitForm }: ImageSelectProps) => {
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
                    style="primary"
                    size="medium"
                    radius="large"
                    onClick={submitForm}
                >
                    <span>Skapa</span>
                    <PlusIcon />
                </Button>
            </ModalContent.Actions>
        </ModalContent.Wrapper>
    )
}

export default CreateEventForm
