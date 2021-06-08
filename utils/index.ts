import { useMemo } from 'react'

/**
 * Returns true if the code is executing on the client
 */
export function isClient() {
    return typeof window !== 'undefined'
}

/**
 * Combines a list of classnames into a single, space-separated string
 */
export function combine(...classNames: Array<string>) {
    return useMemo(() => classNames.join(' '), [classNames])
}

/**
 * Appends a custom class to a list of classnames.
 * Useful when accepting `className` as a prop to a component.
 */
export function extend(classNames: string, className?: string) {
    return className ? `${classNames} ${className}` : classNames
}
