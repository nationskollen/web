import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { LinkItem } from '@common/SidebarNavigation'

export interface Props {
    link: LinkItem
}

const SidebarNavigationLink = ({ link }: Props) => {
    return (
        <ScrollLink
            href={link.href}
            className="rounded-sm px-md py-sm"
            activeClass="bg-primary-highlight text-primary"
            to={link.href.substring(1)}
            smooth={true}
            duration={200}
            offset={-4.5 * 16}
            hashSpy={true}
            spy={true}
        >
            {link.title}
        </ScrollLink>
    )
}

export default SidebarNavigationLink
