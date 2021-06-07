import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LinkIcon } from '@heroicons/react/solid'
import { Section } from '@common/TableOfContents'

export interface Props {
    section: Section
}

const SidebarNavigationLink = ({ section }: Props) => {
    const router = useRouter()
    const active = router.asPath.split('#')[1] === section.href.substring(1)
    const classes = active
        ? 'text-primary bg-primary-highlight dark:bg-background-highlight dark:text-primary-highlight'
        : 'text-text'

    return (
        <Link href={active ? router.pathname : section.href}>
            <li className="">
                <a
                    className={`flex flex-row items-center w-full pl-md pr-xsm h-10 rounded-sm ${classes}`}
                    href={section.href}
                >
                    <div className="flex flex-row items-center justify-between flex-1 group">
                        {section.title}
                        {!active && (
                            <div className="rounded-full p-sm">
                                <LinkIcon className="opacity-0 w-md h-md group-hover:opacity-100 transition-opacity duration-100" />
                            </div>
                        )}
                    </div>
                </a>
            </li>
        </Link>
    )
}

export default SidebarNavigationLink
