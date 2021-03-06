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
 * It will also automatically insert the form element, as well as a `FormProvider`.
 * This allows all components rendered by this componen to use the `useFormContext` hook.
 *
 * Example usage:
 * ```typescript
 * export interface FormValues { .. }
 *
 * const MyForm = ({ open, setOpen }: ModalOpenProps) => {
 *     const form = useForm<FormValues>(DEFAULT_MODAL_FORM_PROPS)
 *
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
 *             form={form}
 *             extraProps={{ .. }}
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
import { Path, SubmitHandler, UseFormReturn } from 'react-hook-form'
import ModalSteps, { StepProps, Props as ModalStepsProps } from '@common/ModalSteps'

export type StepPropsTransformator<T, K> = (props: StepProps) => FormStepProps<T, K>

export interface NextCallbackOptions<V> {
    skipValidate?: boolean
    fields?: Array<V>
}

export interface FormStepProps<T, K> extends Omit<StepProps, 'next'>, UseFormReturn<T> {
    next: (options?: NextCallbackOptions<Path<T>>) => void
    extra?: K
}

export interface Props<T, K> extends Omit<ModalStepsProps<T>, 'steps'> {
    form: UseFormReturn<T>
    onSubmit: SubmitHandler<T>
    extraProps?: K
    steps: Array<(props: FormStepProps<T, K>) => React.ReactNode>
}

const ModalForm = <T, K>({ form, extraProps, onSubmit, steps, ...props }: Props<T, K>) => {
    // Pass through all form props to each step
    const stepProps: StepPropsTransformator<T, K> = ({ next: stepNext, ...props }: StepProps) => ({
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
        extra: extraProps,
        ...form,
        ...props,
    })

    return (
        <ModalSteps
            noPadding={true}
            cardClassName="w-form-modal"
            cardTitleClassName="p-md"
            onSubmit={form.handleSubmit(onSubmit)}
            form={form}
            steps={steps.map((step) => (props: StepProps) => step(stepProps(props)))}
            {...props}
        />
    )
}

export default ModalForm
