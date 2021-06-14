import { useMemo } from 'react'
import { DeepMap, FieldError } from 'react-hook-form'

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
    return useMemo(() => combineNoCache(...classNames), [classNames])
}

/**
 * Combines a list of classnames into a single, space-separated string
 * without caching the result.
 */
export function combineNoCache(...classNames: Array<string>) {
    return classNames.join(' ')
}

/**
 * Appends a custom class to a list of classnames.
 * Useful when accepting `className` as a prop to a component.
 */
export function extend(classNames: string, className?: string) {
    return className ? `${classNames} ${className}` : classNames
}

/**
 * Extracts the hash/anchor of the current URL.
 *
 * For example:
 * ```typescript
 * getUrlHash('/admin/dashboard#anchor') // === '#anchor'
 * ```
 */
export function getUrlHash(url: string) {
    const anchor = url.split('#')[1]

    if (!anchor) {
        return null
    }

    // Prepend '#'
    return `#${anchor}`
}

/**
 * Extracts the error message from an input error.
 * If no error message exists, an empty string will be returned.
 */
export function getFieldErrorMessage(error?: boolean | FieldError | DeepMap<unknown, FieldError>) {
    // Input field tooltip title
    let title = ''

    if (error) {
        if (error.hasOwnProperty('message')) {
            const errorMessage = (error as FieldError).message

            if (errorMessage) {
                title = errorMessage
            }
        }
    }

    return title
}
