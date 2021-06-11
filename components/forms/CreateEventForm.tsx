import { Formik, Form, FormikHelpers } from 'formik'
import { LoginIcon } from '@heroicons/react/outline'

import Input from '@common/Input'
import Button from '@common/Button'
import Textarea from '@common/Textarea'
import { Category } from '@nationskollen/sdk'

export interface FormValues {
    title: string
    category: Category | null
    description: string
    nationCard: string
    membersOnly: string
}

const CreateEventForm = () => {
    const handleSumbit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        console.log(values)

        // TODO: Set this to false when we get a response from the server
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={{
                title: '',
                category: null,
                description: '',
                nationCard: '',
                membersOnly: '',
            }}
            onSubmit={handleSumbit}
        >
            <Form>
                <div className="space-y-md">
                    <Input id="title" label="Titel" type="text" required />
                    <Textarea id="description" label="Beskrivning" type="text" required />
                </div>
            </Form>
        </Formik>
    )
}

export default CreateEventForm
