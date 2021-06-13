import React from 'react'
import { combineNoCache } from '@utils'

import Uppsala from '@svg/Uppsala'

export interface Props {
    children: React.ReactNode
}

const Template = ({ children }: Props) => {
    return (
        <div
            className={combineNoCache(
                'relative flex flex-col items-center w-screen h-screen text-white py-lg',
                'bg-background-extra dark:bg-background'
            )}
        >
            <div className="absolute bottom-0 left-0 z-behind">
                <Uppsala className="w-screen text-secondary min-w-login-background dark:text-black" />
            </div>
            <main className="relative z-10 h-full mt-1/5 w-login-modal">{children}</main>
        </div>
    )
}

export default {
    Template,
}
