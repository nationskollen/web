/**
 * Contact information
 */
export const VERSION = 'v1.0.0-beta'
export const CONTACT_EMAIL = 'kontakt@nationskollen.se'

export const NOTIFICATION_DURATION = 3500
export const DEFAULT_DEBOUNCE_DELAY = 150
export const THEME_STORAGE_KEY = 'theme'

export const AUTH = {
    USER_STORAGE_KEY: 'user',
    DEFAULT_REDIRECT_ROUTE: '/admin/login',
}

/**
 * Defines the default form settings.
 *
 * Must specify `any` here to make `useForm` happy
 */
export const DEFAULT_FORM_PROPS: any = {
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
}

/**
 * Defines constant values for localization
 */
export const LOCALES = {
    ADMIN: {
        DEFAULT_NAMESPACES: ['common', 'admin-common'],
    },
    CLIENT: {
        DEFAULT_NAMESPACES: ['common'],
    },
}
