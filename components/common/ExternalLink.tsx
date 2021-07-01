import Link from 'next/link'
import { ExternalLinkIcon } from '@heroicons/react/solid'

export interface Props {
    href: string
    label: string
}

const ExternalLink = ({ href, label }: Props) => {
    return (
        <Link href={href}>
            <a className="flex flex-row items-center h-10 font-bold py-sm space-x-sm hover:text-primary-text">
                <span>{label}</span>
                <ExternalLinkIcon className="w-6 h-6" />
            </a>
        </Link>
    )
}

export default ExternalLink
