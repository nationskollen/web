import React from 'react'

export interface Props {
    children?: React.ReactElement | React.ReactElement[]
}

const PopoverSection = ({ children }: Props) => {
    return (
        <section className="border-b-1 border-border pb-sm mb-sm border-border-dark last:border-0">
            {children}
        </section>
    )
}

export default PopoverSection
