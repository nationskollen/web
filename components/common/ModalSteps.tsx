import React, { useState } from 'react'
import Modal, { Props as ModalProps } from '@common/Modal'

export type NavigationCallback = () => void

export interface StepProps {
    next: NavigationCallback
    previous: NavigationCallback
    close: NavigationCallback
    currentStep: number
    totalSteps: number
    ref: React.Ref<any>
}

export interface Props extends Omit<ModalProps, 'title' | 'description' | 'wrapperComponent'> {
    steps: Array<(props: StepProps) => React.ReactNode>
}

export interface WrapperProps {
    children: React.ReactNode
}

const ModalSteps = React.forwardRef(({ steps, open, setOpen, ...props }: Props, ref: any) => {
    if (steps.length === 0) {
        return null
    }

    const [currentStep, setCurrentStep] = useState(0)

    const next: NavigationCallback = () => {
        if (steps.length === currentStep) {
            return
        }

        setCurrentStep(currentStep + 1)
    }

    const previous: NavigationCallback = () => {
        if (currentStep === 0) {
            return
        }

        setCurrentStep(currentStep - 1)
    }

    const content = steps[currentStep]({
        next,
        previous,
        currentStep,
        totalSteps: steps.length,
        close: () => setOpen(false),
        ref,
    })

    return (
        <Modal open={open} setOpen={setOpen} {...props}>
            {content}
        </Modal>
    )
})

export default ModalSteps
