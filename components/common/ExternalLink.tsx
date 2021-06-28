import Link from 'next/link'
import { ExternalLinkIcon } from '@heroicons/react/solid'

export interface Props {
    href: string
    label: string
}

const ExternalLink = ({ href, label }: Props) => {
    return (
        <Link href={href}>
            <a className="flex flex-row h-10 py-sm w-full items-center space-x-sm font-bold hover:text-primary-text">
                <ExternalLinkIcon className="h-6 w-6" />
                <span>{label}</span>
            </a>
        </Link>
    )
}

export default ExternalLink
