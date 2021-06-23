import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface Props {
    title: string
    href: string
}

const NavLink = ({ title, href }: Props) => {
    const router = useRouter()
    const active = router.pathname.substr(0, href.length) === href

    return (
        <li className="h-full cursor-pointer py-xsm">
            <Link href={href} passHref={true}>
                <a
                    className={clsx(
                        'relative font-bold rounded p-sm hover:bg-background-highlight',
                        'hover:text-text-highlight focus:outline-none focus:ring',
                        'focus:ring-focus-default focus:text-text-highlight',
                        'focus:bg-background-highlight',
                        active ? 'text-primary-text' : 'text-text'
                    )}
                >
                    {title}
                </a>
            </Link>
        </li>
    )
}

export default NavLink
