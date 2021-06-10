import React from 'react'
import Link from 'next/link'
import { combine } from '@utils'
import { useRouter } from 'next/router'
import { LinkIcon } from '@heroicons/react/solid'
import { Section } from '@common/TableOfContents'

export interface Props {
    section: Section
}

const SidebarNavigationLink = ({ section }: Props) => {
    const router = useRouter()
    const active = router.asPath.split('#')[1] === section.href.substring(1)
    const activeStyle =
        'text-primary bg-primary-highlight dark:bg-background-highlight dark:text-text-highlight'
    const inactiveStyle = 'text-text'
    const classes = `focus:outline-default ${active ? activeStyle : inactiveStyle}`

    return (
        <Link href={active ? router.pathname : section.href}>
            <li className="mb-sm last:mb-0">
                <a
                    className={`flex flex-row items-center w-full pl-md pr-xsm h-10 rounded-sm ${classes}`}
                    href={section.href}
                >
                    <div className="flex flex-row items-center justify-between flex-1 group">
                        {section.title}
                        <div className="rounded-full p-sm">
                            <LinkIcon
                                className={combine(
                                    'w-md h-md group-hover:opacity-100 transition-opacity duration-100',
                                    active ? 'opacity-100' : 'opacity-0'
                                )}
                            />
                        </div>
                    </div>
                </a>
            </li>
        </Link>
    )
}

export default SidebarNavigationLink
