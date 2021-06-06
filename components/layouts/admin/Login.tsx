import React from 'react'

export interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const LoginLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-screen h-screen text-white py-lg bg-primary">
            <main className="">{children}</main>
        </div>
    )
}

export default LoginLayout