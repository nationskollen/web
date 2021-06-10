import React from 'react'

export interface Props {
    label: string
    icon: React.ElementType
    children?: React.ReactElement | React.ReactElement[]
}

const PopoverSectionItem = ({ label, icon: IconComponent, children }: Props) => {
    return (
        <div className="flex flex-row items-center space-x-sm">
            <IconComponent className="w-8 h-8 p-2 rounded-sm bg-primary-highlight text-primary" />
            <p className="flex-1 text-text-highlight">{label}</p>
            {children}
        </div>
    )
}

export default PopoverSectionItem
