import clsx from 'clsx'
import React from 'react'

import CardTitle from '@common/CardTitle'
import IconCircle, { IconCircleStyles } from '@common/IconCircle'

export interface BaseProps {
    children?: React.ReactNode
}

export interface WrapperProps extends BaseProps {}

export interface MainProps extends BaseProps {
    className?: string
}

export interface HeaderProps extends BaseProps {
    title: string
    description?: string
    currentStep?: number
    totalSteps?: number
    icon?: React.ElementType
    iconStyle?: IconCircleStyles
    className?: string
    descriptionClassName?: string
}

export interface ActionsProps extends BaseProps {
    noBorder?: boolean
    className?: string
}

const Wrapper = ({ children }: WrapperProps) => {
    return <div className="flex flex-col flex-1 rounded overflow space-y-md">{children}</div>
}

const Header = ({
    title,
    description,
    currentStep,
    totalSteps,
    icon,
    iconStyle,
    className,
    descriptionClassName,
    children,
}: HeaderProps) => {
    let parsedDescription = description

    // If no description is provided, check if we have defined steps.
    // This will automatically generate a step counter if needded.
    if (!description && currentStep !== undefined && totalSteps !== undefined) {
        parsedDescription = `Steg ${currentStep + 1} / ${totalSteps}`
    }

    return (
        <div className={clsx('flex flex-row pb-0 space-x-md p-md', className)}>
            {icon && <IconCircle style={iconStyle} icon={icon} />}
            <CardTitle
                modal={true}
                title={title}
                description={parsedDescription}
                descriptionClassName={clsx(
                    currentStep !== undefined && totalSteps ? 'leading-none' : '',
                    descriptionClassName
                )}
            >
                {children}
            </CardTitle>
        </div>
    )
}

const Main = ({ className, children }: MainProps) => {
    return <div className={clsx('px-md space-y-md flex-1', className)}>{children}</div>
}

const Actions = ({ noBorder, className, children }: ActionsProps) => {
    return (
        <div
            className={clsx(
                'flex flex-row justify-end w-full space-x-3 px-md py-3 rounded-b',
                'border-border self-end bg-background-extra dark:bg-background border-border',
                noBorder ? 'pt-0 dark:bg-background-extra' : 'border-t-1 dark:border-t-0',
                className
            )}
        >
            {children}
        </div>
    )
}

export default {
    Wrapper,
    Header,
    Main,
    Actions,
}
