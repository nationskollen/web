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
    const active =
        router.asPath.split('#')[1] === id
            ? 'ring-2 ring-primary-extra dark:ring-primary-text ring-opacity-60'
            : ''

    return (
        <Anchor id={id}>
            <Card className={active}>{children}</Card>
        </Anchor>
    )
}

export default Section
