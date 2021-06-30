import React from 'react'

import Column from '@common/Column'
import FormTitle from '@common/FormTitle'

export interface Props {
    title: string
    danger?: boolean
    children?: React.ReactNode
}

const FormSection = ({ title, danger, children }: Props) => {
    return (
        <Column className="mb-xxlg last:mb-0" noVerticalSpacing={true}>
            <FormTitle text={title} danger={danger} />
            {children}
        </Column>
    )
}

export default FormSection
