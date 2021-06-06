import React from 'react'
import Uppsala from '@svg/Uppsala'

export interface Props {
    children: React.ReactElement | React.ReactElement[]
}

const LoginLayout = ({ children }: Props) => {
    return (
        <div className="relative flex flex-col items-center w-screen h-screen text-white py-lg bg-primary">
            <div className="absolute bottom-0 left-0 z-behind">
                <Uppsala containerClassNames="text-primary-dark w-screen min-w-login-background" />
            </div>
            <main className="z-10 mt-1/5 w-login-modal">{children}</main>
        </div>
    )
}

export default LoginLayout
