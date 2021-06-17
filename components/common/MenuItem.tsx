import { Menu } from '@headlessui/react'

import Button from '@common/Button'

export interface Props {
    icon: React.ElementType
    label: string
    onClick: () => void
}

const MenuItem = ({ icon: Icon, label, onClick }: Props) => {
    return (
        <Menu.Item>
            {({ active }) => (
                <Button
                    onClick={onClick}
                    size="small"
                    style={active ? 'secondary' : 'transparent'}
                    leftAlignContent={true}
                    containerClassName="space-x-sm"
                >
                    <Icon
                        className={active ? 'text-secondary-highlight-text' : 'text-primary-text'}
                    />
                    <span>{label}</span>
                </Button>
            )}
        </Menu.Item>
    )
}

export default MenuItem
