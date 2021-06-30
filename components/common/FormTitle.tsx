import clsx from 'clsx'
import React from 'react'

import Title from '@common/Title'

export interface Props {
    text: string
    danger?: boolean
}

const FormTitle = ({ text, danger }: Props) => {
    return (
        <Title
            text={text}
            size="medium"
            className={clsx(
                'mb-lg border-b-1 border-border-dark pb-md',
                danger && 'text-error-text'
            )}
        />
    )
}

export default FormTitle
