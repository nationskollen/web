import React from 'react'
import { combine, extend } from '@utils'

export interface BaseProps {
    children?: React.ReactNode
}

export interface WrapperProps extends BaseProps {}
export interface MainProps extends BaseProps {}
export interface ActionsProps extends BaseProps {
    className?: string
}

const Wrapper = ({ children }: WrapperProps) => {
    return <div className="flex flex-col overflow-hidden rounded space-y-md">{children}</div>
}

const Main = ({ children }: MainProps) => {
    return <div className="px-md">{children}</div>
}

const Actions = ({ className, children }: ActionsProps) => {
    const classes = combine(
        'flex flex-row justify-end w-full space-x-sm p-md border-t-1',
        'bg-background-extra border-border dark:bg-background dark:border-t-0'
    )

    return <div className={extend(classes, className)}>{children}</div>
}

export default {
    Wrapper,
    Main,
    Actions,
}
