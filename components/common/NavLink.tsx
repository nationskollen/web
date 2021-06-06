import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface Props {
    title: string
    href: string
}

const NavLink = ({ title, href }: Props) => {
    const router = useRouter()
    const color =
        router.pathname === href ? 'text-white bg-primary-highlight' : 'text-primary-text-light'

    return (
        <Link href={href}>
            <li className="h-full cursor-pointer py-xsm">
                <a
                    className={`font-bold rounded-sm p-sm hover:bg-primary-highlight hover:text-white ${color}`}
                >
                    {title}
                </a>
            </li>
        </Link>
    )
}

export default NavLink
