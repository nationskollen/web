import clsx from 'clsx'
import React from 'react'

import Title from '@common/Title'

export interface Props {
    title?: string | null
    description?: React.ReactNode
    className?: string
    descriptionClassName?: string
    children?: React.ReactNode
}

const HeaderTitle = ({ title, description, className, descriptionClassName, children }: Props) => {
    return (
        <section className={clsx('flex flex-row items-center justify-between', className)}>
            <div>
                <Title text={title || ''} size="large" />
                <p className={clsx('mt-xsm', descriptionClassName)}>{description}</p>
            </div>
            {children}
        </section>
    )
}

export default HeaderTitle
