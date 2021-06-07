import React from 'react'
import Card from '@common/Card'
import { Element } from 'react-scroll'

export interface Props {
    id: string
    children?: React.ReactElement | React.ReactElement[]
}

const Section = ({ id, children }: Props) => {
    return (
        <Element name={id}>
<Card>{children}</Card>
        </Element>
    )
}

export default Section
