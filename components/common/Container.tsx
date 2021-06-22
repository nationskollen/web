import clsx from 'clsx'

export interface Props {
    as?: React.ElementType
    className?: string
    role?: string
    noPadding?: boolean
    children?: React.ReactNode
}

const Container = ({ as, className, role, noPadding, children }: Props) => {
    const Component = as || 'div'

    return (
        <Component
            role={role}
            className={clsx('max-w-content w-full mx-auto', !noPadding && 'px-lg', className)}
        >
            {children}
        </Component>
    )
}

export default Container
