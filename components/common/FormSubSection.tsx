import clsx from 'clsx'
import React from 'react'

import Title from '@common/Title'
import Column from '@common/Column'
import Anchor from '@common/Anchor'
import IconCircle from '@common/IconCircle'

export interface Props {
    title?: string
    id?: string
    danger?: boolean
    icon?: React.ElementType
    children: React.ReactNode | React.ReactNode[]
}

const FormSubSection = ({ id, title, icon, danger, children }: Props) => {
    return (
        <Anchor id={id}>
            <section
                className={clsx(
                    'mb-md pb-lg border-b-1 border-border',
                    'last-of-type:border-b-0 last-of-type:mb-sm'
                )}
            >
                <div
                    className={clsx(
                        'flex flex-row items-center space-x-sm mb-md',
                        !icon && !title && 'hidden'
                    )}
                >
                    {icon && (
                        <IconCircle icon={icon} size="small" style={danger ? 'error' : undefined} />
                    )}
                    {title && (
                        <Title
                            text={title}
                            size="small"
                            className={clsx(danger && 'text-error-text')}
                        />
                    )}
                </div>
                <Column>{children}</Column>
            </section>
        </Anchor>
    )
}

export default FormSubSection
