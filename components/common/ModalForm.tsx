/**
 * Renders a modal form and passes in all form values and actions to your steps.
 * This should be used when you have a form within a modal. It will use
 * the {@link ModalSteps} component internally, which means that it does support
 * multi-step forms. You can of course only provide a single step.
 *
 * This component will use the `useForm` hook and pass in all returned values
 * directly into each step that you provide. This means that errors, etc, can
 * be accessed directly.
 *
 * Example usage:
 * ```typescript
 * export interface FormValues { .. }
 *
 * const MyForm = ({ open, setOpen }: ModalOpenProps) => {
 *     const submit = (data: FormValues) => {
 *         console.log(data)
 *     }
 *
 *     // ModalForm accepts all of the same props as ModalSteps.
 *     // The only difference being the type of the props passed to each step.
 *     //
 *     // Note that you MUST define each step as shown in the example above.
 *     // If you do not do this, you will not be able to use hooks inside your steps.
 *     return (
 *         <ModalForm
 *             href="#create"
 *             onSubmit={submit}
 *             open={open}
 *             setOpen={setOpen}
 *             steps={[
 *                 (props) => <InitialDetails {...props} />,
 *                 (props) => <TimeAndLocation {...props} />,
 *                 (props) => <ImageSelect {...props} />,
 *             ]}
 *         />
 *     )
 * }
 * ```
 *
 * @module Common
 */
import ModalSteps, { StepProps, Props as ModalStepsProps } from '@common/ModalSteps'
import { Path, UnpackNestedValue, useForm, SubmitHandler, UseFormReturn } from 'react-hook-form'

export type StepPropsTransformator<T> = (props: StepProps) => FormStepProps<T>

export interface NextCallbackOptions<V> {
    skipValidate?: boolean
    fields?: Array<V>
}

export interface FormStepProps<T> extends Omit<StepProps, 'next'>, UseFormReturn<T> {
    next: (options?: NextCallbackOptions<Path<T>>) => void
}

export interface Props<T> extends Omit<ModalStepsProps, 'steps'> {
    onSubmit: (data: UnpackNestedValue<T>, form: UseFormReturn<T>) => void
    steps: Array<(props: FormStepProps<T>) => React.ReactNode>
}

const ModalForm = <T,>({ onSubmit, steps, ...props }: Props<T>) => {
    const form = useForm<T>()

    // Pass through all form props to each step
    const stepProps: StepPropsTransformator<T> = ({ next: stepNext, ...props }: StepProps) => ({
        // Extend the next callback with the option of validating input
        // fields
        next: async (options) => {
            if (!options?.skipValidate) {
                const result = await form.trigger(options?.fields)

                if (!result) {
                    return
                }
            }

            stepNext()
        },
        ...form,
        ...props,
    })

    const forwardFormProps: SubmitHandler<T> = (data: UnpackNestedValue<T>) => {
        onSubmit(data, form)
    }

    return (
        <ModalSteps
            noPadding={true}
            cardClassName="w-form-modal"
            cardTitleClassName="p-md"
            onSubmit={form.handleSubmit(forwardFormProps)}
            steps={steps.map((step) => (props: StepProps) => step(stepProps(props)))}
            {...props}
        />
    )
}

export default ModalForm
