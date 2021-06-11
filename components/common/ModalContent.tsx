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
    noBorder?: boolean
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

const Actions = ({ noBorder, className, children }: ActionsProps) => {
    const classes = combine(
        'flex flex-row justify-end w-full space-x-3 p-md bg-background border-border',
        noBorder ? 'pt-0 dark:bg-background-extra' : 'border-t-1 dark:border-t-0 mt-md'
    )

    return <div className={extend(classes, className)}>{children}</div>
}

export default {
    Wrapper,
    Header,
    Main,
    Actions,
}
