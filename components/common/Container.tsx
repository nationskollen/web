import clsx from 'clsx'

export interface Props {
    as?: React.ElementType
    className?: string
    role?: string
    children?: React.ReactNode
}

const Container = ({ as, className, role, children }: Props) => {
    const Component = as || 'div'

    return (
        <Component role={role} className={clsx('max-w-content w-full mx-auto px-md', className)}>
            {children}
        </Component>
    )
}

export default Container
