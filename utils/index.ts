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
    return classNames.join(' ')
}
