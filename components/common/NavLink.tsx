import React from 'react'
import Link from 'next/link'
import { combine } from '@utils'
import { useRouter } from 'next/router'

export interface Props {
    title: string
    href: string
}

const NavLink = ({ title, href }: Props) => {
    const router = useRouter()

    return (
        <li className="h-full cursor-pointer py-xsm">
            <Link href={href} passHref={true}>
                <a
                    className={combine(
                        'font-bold rounded p-sm hover:bg-primary-extra hover:text-white',
                        'focus:outline-none focus:ring focus:ring-focus-primary focus:text-white',
                        router.pathname === href
                            ? 'text-white bg-primary-extra'
                            : 'text-primary-text-light'
                    )}
                >
                    {title}
                </a>
            </Link>
        </li>
    )
}

export default NavLink
