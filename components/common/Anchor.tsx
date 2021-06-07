import React from 'react'

export interface Props {
    id: string
    children?: React.ReactElement | React.ReactElement[]
}

const Card = ({ id, children }: Props) => {
    return (
        <div>
            <div className="relative invisible block -top-admin-header" id={id} />
            {children}
        </div>
    )
}

export default Card
