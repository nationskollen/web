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
    className?: string
}

export interface ActionsProps extends BaseProps {
    className?: string
}

const Wrapper = ({ children }: WrapperProps) => {
    return <div className="flex flex-col overflow-hidden rounded">{children}</div>
}

const Header = ({ title, description, className, children }: HeaderProps) => {
    return (
        <CardTitle
            modal={true}
            title={title}
            description={description}
            className={extend('p-md', className)}
        >
            {children}
        </CardTitle>
    )
}

const Main = ({ className, children }: MainProps) => {
    return <div className={extend('px-md space-y-md', className)}>{children}</div>
}

const Actions = ({ className, children }: ActionsProps) => {
    const classes = combine(
        'flex flex-row justify-end w-full space-x-3 p-md border-t-1 mt-md',
        'bg-background-extra border-border dark:bg-background dark:border-t-0'
    )

    return <div className={extend(classes, className)}>{children}</div>
}

export default {
    Wrapper,
    Header,
    Main,
    Actions,
}
