import clsx from 'clsx'
import React from 'react'

export type TagStyles = 'primary-highlight'

export interface Props {
    label: string
    icon?: React.ElementType
    style?: TagStyles
}

const TAG_STYLES: Record<TagStyles, string> = {
    'primary-highlight': ''
}

const Tag = ({ label, icon: Icon, style }: Props) => {
    const styles = TAG_STYLES[style || 'primary-highlight']

    return (
        <div
            className={clsx(
                'py-xsm px-sm rounded bg-primary-highlight',
                'flex flex-row items-center space-x-xsm',
                styles,
            )}>
            {Icon && <Icon className="w-5 h-5 text-primary" />}
            <p className="font-bold uppercase tracking-wider text-xsm text-primary">
                {label}
            </p>
        </div>
    )
}

export default Tag
