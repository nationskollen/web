import React from 'react'
import Card from '@common/Card'
import Anchor from '@common/Anchor'
import { useRouter } from 'next/router'

export interface Props {
    id: string
    children?: React.ReactElement | React.ReactElement[]
}

const Section = ({ id, children }: Props) => {
    const router = useRouter()
    const active = router.asPath.split('#')[1] === id

    return (
        <Anchor id={id}>
            <Card active={active}>{children}</Card>
        </Anchor>
    )
}

export default Section
