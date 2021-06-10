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
        router.pathname === href ? 'text-white bg-primary-extra' : 'text-primary-text-light'
    const focusStyle = 'focus:outline-none focus:text-white'
    const classes = `font-bold rounded p-sm hover:bg-primary-extra hover:text-white ${color} ${focusStyle}`

    return (
        <li className="h-full cursor-pointer py-xsm">
            <Link href={href} passHref={true}>
                <a className={classes}>
                    {title}
                </a>
            </Link>
        </li>
    )
}

export default NavLink
