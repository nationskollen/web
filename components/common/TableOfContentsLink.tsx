import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LinkIcon } from '@heroicons/react/solid'

import { getUrlHash } from '@utils'
import { Section } from '@common/TableOfContents'

export interface Props {
    section: Section
}

const SidebarNavigationLink = ({ section }: Props) => {
    const router = useRouter()
    const active = getUrlHash(router.asPath) === section.href

    const inactiveStyle = 'text-text'
    const activeStyle =
        'text-primary bg-primary-highlight dark:bg-background-highlight dark:text-text-highlight'

    return (
        <Link href={active ? router.pathname : section.href}>
            <li className="mb-sm last:mb-0">
                <a
                    href={section.href}
                    className={clsx(
                        'flex flex-row items-center w-full pl-md pr-xsm text-md h-10 rounded-sm',
                        'focus:outline-none focus:ring focus:ring-focus-default',
                        active ? activeStyle : inactiveStyle
                    )}
                >
                    <div className="flex flex-row items-center justify-between flex-1 group">
                        {section.title}
                        <div className="rounded-full p-sm">
                            <LinkIcon
                                className={clsx(
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
