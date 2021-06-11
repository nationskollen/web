import React from 'react'
import { combine, extend } from '@utils'

import CardTitle from '@common/CardTitle'

export interface BaseProps {
    children?: React.ReactNode
}

export interface WrapperProps extends BaseProps {}

export interface MainProps extends BaseProps {
    className?: string
}

export interface HeaderProps extends BaseProps {
    title: string
    description: string
    icon?: React.ElementType
    iconClassName?: string
    className?: string
}

export interface ActionsProps extends BaseProps {
    noBorder?: boolean
    className?: string
}

const Wrapper = ({ children }: WrapperProps) => {
    return <div className="flex flex-col flex-1 overflow-hidden rounded space-y-md">{children}</div>
}

const Header = ({ title, description, icon: Icon, iconClassName, className, children }: HeaderProps) => {
    return (
        <div className="flex flex-row pb-0 space-x-md p-md">
            {Icon && (
                <div className={extend('rounded-full w-10 h-10 p-sm', iconClassName)}>
                    <Icon />
                </div>
            )}
            <CardTitle
                modal={true}
                title={title}
                description={description}
                className={className}
            >
                {children}
            </CardTitle>
        </div>
    )
}

const Main = ({ className, children }: MainProps) => {
    return <div className={extend('px-md space-y-md flex-1', className)}>{children}</div>
}

const Actions = ({ noBorder, className, children }: ActionsProps) => {
    const classes = combine(
        'flex flex-row justify-end w-full space-x-3 px-md py-3 border-border self-end',
        'bg-background-extra dark:bg-background border-border',
        noBorder ? 'pt-0 dark:bg-background-extra' : 'border-t-1 dark:border-t-0',
    )

    return <div className={extend(classes, className)}>{children}</div>
}

export default {
    Wrapper,
    Header,
    Main,
    Actions,
}
