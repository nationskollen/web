import React, { useMemo, useState } from 'react'
import Modal, { Props as ModalProps } from '@common/Modal'

export type NavigationCallback = () => void

export interface StepProps {
    index: number
    next: NavigationCallback
    previous: NavigationCallback
    close: NavigationCallback
    currentStep: number
    totalSteps: number
}

export interface Props extends Omit<ModalProps, 'title' | 'description' | 'wrapperComponent'> {
    steps: Array<(props: StepProps) => React.ReactNode>
}

export interface WrapperProps {
    children: React.ReactNode
}

export interface OptimizerProps {
    index: number
    currentStep: number
    children: React.ReactNode
}

const shouldRender = (_, next: OptimizerProps) => {
    return next.currentStep !== next.index
}

// This is used to optimize rendering of each modal step.
// It will check if the step index is the same as the current step
// and ONLY re-render if this is the case.
//
// Without this, each step would render every time we navigate
// between different steps.
const ModalStepOptimizer = React.memo(({ children }: OptimizerProps) => {
    return (
        <>{children}</>
    )
}, shouldRender)

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

    // Only render the steps if the modal is open.
    // This fixes an issue where each step would be rendered
    // once when closing the modal.
    return (
        <Modal open={open} setOpen={setOpen} {...props}>
            {open && steps.map((child, index) => (
                <div key={index} className={index !== currentStep ? 'hidden invisible' : ''}>
                    <ModalStepOptimizer index={index} currentStep={currentStep}>
                        {child({
                            index,
                            next,
                            previous,
                            currentStep,
                            totalSteps: steps.length,
                            close: () => setOpen(false),
                        })}
                    </ModalStepOptimizer>
                </div>
            ))}
        </Modal>
    )
}

export default ModalSteps
