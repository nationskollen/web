import React from 'react'

export interface Props {
    id: string
    children: React.ReactElement | React.ReactElement[]
}

const Anchor = ({ id, children }: Props) => {
    return (
        <div>
            <div id={id} className="relative invisible block -top-md"/>
            {children}
        </div>
    )
}

export default Anchor
