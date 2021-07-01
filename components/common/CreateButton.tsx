import React from 'react'
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/outline'

import Button, { ButtonStyles } from '@common/Button'

export interface Props {
    href: string
    label?: string
    style?: ButtonStyles
}

const CreateButton = ({ label, href, style }: Props) => {
    return (
        <Link href={href} passHref={true}>
            <Button style={style || 'primary'}>
                {label && <span>{label}</span>}
                <PlusIcon />
            </Button>
        </Link>
    )
}

export default CreateButton
