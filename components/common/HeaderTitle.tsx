import clsx from 'clsx'
import React from 'react'

import Row from '@common/Row'
import Title from '@common/Title'
import BackArrow from '@common/BackArrow'

export interface Props {
    title?: string | null
    tags?: React.ReactNode
    description?: React.ReactNode
    backHref?: string
    className?: string
    descriptionClassName?: string
    leftComponent?: React.ReactNode
    children?: React.ReactNode
}

const HeaderTitle = ({
    title,
    tags,
    description,
    backHref,
    className,
    descriptionClassName,
    leftComponent,
    children,
}: Props) => {
    return (
        <section
            className={clsx(
                'w-full flex flex-row items-center justify-between',
                backHref && 'pb-sm',
                className
            )}
        >
            <div className="flex flex-row justify-center space-x-lg">
                {leftComponent && leftComponent}
                <div
                    className={clsx(
                        'flex flex-col items-start',
                        backHref ? 'justify-start' : 'justify-center'
                    )}
                >
                    {backHref && <BackArrow href={backHref} className="mb-sm" />}
                    <Row className="items-center">
                        <Title text={title || ''} size="large" />
                        {tags && tags}
                    </Row>
                    <p className={clsx('mt-xsm', descriptionClassName)}>{description}</p>
                </div>
            </div>
            {children}
        </section>
    )
}

export default HeaderTitle
