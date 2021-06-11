import React, { useState } from 'react'

import Modal, { Props as ModalProps } from '@common/Modal'

export type NavigationCallback = () => void

export interface StepProps {
    next: NavigationCallback
    previous: NavigationCallback
    currentStep: number
    totalSteps: number
}

export interface StepItem {
    title: string
    description: string
    content: React.ReactNode
}

export interface Props extends Omit<ModalProps, 'title' | 'description' | 'wrapperComponent'> {
    steps: Array<(props: StepProps) => StepItem>
}

export interface WrapperProps {
    children: React.ReactNode
}

const ModalSteps = ({ steps, open, setOpen, ...props }: Props) => {
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

    const { title, description, content } = steps[currentStep]({
        next,
        previous,
        currentStep,
        totalSteps: steps.length,
    })

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            title={title}
            description={description}
            {...props}
            {...props}
        >
            {content}
        </Modal>
    )
}

export default ModalSteps
