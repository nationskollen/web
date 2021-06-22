import { GetStaticProps } from 'next'
import { DeepMap, FieldError } from 'react-hook-form'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

/**
 * Returns true if the code is executing on the client
 */
export function isClient() {
    return typeof window !== 'undefined'
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
    const splitURL = url.split('#')
    const anchor = splitURL[1]

    if (!anchor) {
        return {
            path: url,
            hash: null
        }
    }

    return {
        path: splitURL[0],
        hash: `#${anchor}`,
    }
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

/**
 * Extracts the time (hour) from an ISO date string.
 * It removes the unnecessary information like milliseconds and timezone.
 * We can safely do this on server data since it should **always** return
 * dates in UTC+2.
 *
 * This should hopefully be faster than creating a full Date instance
 * using `new Date()`.
 */
export function getShorterDate(date: string) {
    const arr = date.split('T')
    return `${arr[0]} - ${arr[1].substr(0, 5)}`
}
