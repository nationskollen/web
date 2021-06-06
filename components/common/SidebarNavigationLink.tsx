import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LinkItem } from '@common/SidebarNavigation'

export interface Props {
    link: LinkItem
    isFirst?: boolean
}

const SidebarNavigationLink = ({ link, isFirst }: Props) => {
    const { asPath } = useRouter()
    const currentAnchor = asPath.split('#')[1]
    const isActive = currentAnchor === link.href.substring(1) || (!currentAnchor && isFirst)
    const styles = isActive ? 'bg-primary-highlight text-primary' : ''

    return (
        <Link href={link.href} passHref={true}>
            <a className={`px-md py-sm rounded-sm ${styles}`}>{link.title}</a>
        </Link>
    )
}

export default SidebarNavigationLink
