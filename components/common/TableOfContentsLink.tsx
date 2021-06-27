import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'

import { Section } from '@common/TableOfContents'

export interface Props {
    section: Section
}

const TableOfContentsLink = ({ section }: Props) => {
    return (
        <Link href={section.href}>
            <li className="mb-xsm last:mb-0 -ml-sm">
                <a
                    href={section.href}
                    className={clsx(
                        'flex flex-row items-center w-full text-md h-10',
                        'rounded-sm px-sm text-text-extra',
                        'transition-colors duration-in',
                        'focus:outline-none focus:text-text-highlight',
                        'hover:text-text-highlight',
                    )}
                >
                    {section.title}
                </a>
            </li>
        </Link>
    )
}

export default TableOfContentsLink
