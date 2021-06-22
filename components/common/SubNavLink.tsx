import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getUrlHash } from '@utils'
import { useNavigation } from '@contexts/Navigation'

export interface Props {
    title: string
    href: string
}

const SubNavLink = ({ title, href }: Props) => {
    const router = useRouter()
    const { basePath } = useNavigation()
    const { path } = getUrlHash(router.asPath)
    const actualHref = `${basePath}${href === '/' ? '' : href}`
    const isActive = path === actualHref

    return (
        <li className="h-full cursor-pointer flex">
            <Link href={actualHref} passHref={true}>
                <a
                    className={clsx(
                        'font-bold py-3 border-b-4 border-transparent',
                        'focus:outline-none focus:text-text-highlight',
                        isActive
                            ? 'text-text-highlight border-primary-extra'
                            : 'text-text focus:border-border hover:border-border-dark'
                    )}
                >
                    {title}
                </a>
            </Link>
        </li>
    )
}

export default SubNavLink
