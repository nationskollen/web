import Link from 'next/link'

import Title from '@common/Title'
import NationIcon from '@common/NationIcon'

export interface Props {
    src?: string | null
    name?: string
}

const NationTitle = ({ src, name }: Props) => {
    return (
        <div className="flex flex-row items-center space-x-md">
            <Link href="/admin/dashboard">
                <a>
                    <NationIcon src={src} />
                </a>
            </Link>
            <Title text={name} className="text-white" />
        </div>
    )
}

export default NationTitle
