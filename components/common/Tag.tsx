import clsx from 'clsx'
import React from 'react'

export type TagStyles = 'primary' | 'success' | 'error' | 'secondary' | 'transparent'

export interface Props {
    label: string
    icon?: React.ElementType
    style?: TagStyles
}

const TAG_STYLES: Record<TagStyles, string> = {
    primary: 'bg-primary-highlight text-primary',
    success: 'bg-success-highlight text-success-highlight-text',
    error: 'bg-error-highlight text-error-highlight-text',
    secondary: 'bg-secondary text-white',
    transparent: 'bg-transparent text-text-highlight',
}

const Tag = ({ label, icon: Icon, style }: Props) => {
    const styles = TAG_STYLES[style || 'primary']

    return (
        <div
            className={clsx(
                'py-xsm px-sm pr-3 rounded',
                'flex flex-row items-center space-x-xsm',
                styles
            )}
        >
            {Icon && (
                <Icon className={clsx('w-5 h-5', style === 'transparent' && 'text-success')} />
            )}
            <p className="font-bold text-md">{label}</p>
        </div>
    )
}

export default Tag
