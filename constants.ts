/**
 * Contact information
 */
export const VERSION = 'v1.0.0-beta'
export const CONTACT_EMAIL = 'kontakt@nationskollen.se'

export const NOTIFICATION_DURATION = 3500
export const DEFAULT_DEBOUNCE_DELAY = 150
export const THEME_STORAGE_KEY = 'theme'

export const AUTH = {
    TOKEN_STORAGE_KEY: 'token',
    DEFAULT_REDIRECT_ROUTE: '/admin/login',
}

/**
 * Defines the default file formats that will be accepted
 * by the {@link FileUploadInput} component.
 */
export const DEFAULT_ACCEPT_FORMATS = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']

/**
 * Defines the default form settings.
 */
export const DEFAULT_FORM_PROPS: any = {
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
}

/**
 * Defines the default modal form settings.
 */
export const DEFAULT_MODAL_FORM_PROPS: any = {
    mode: 'onSubmit',
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
