export const VERSION = 'v1.0.0-beta'
export const CONTACT_EMAIL = 'kontakt@nationskollen.se'

export const AUTH = {
    USER_STORAGE_KEY: 'user',
    DEFAULT_REDIRECT_ROUTE: '/admin/login',
}

export const THEME_STORAGE_KEY = 'theme'

// Must specify `any` here to make `useForm` happy
export const DEFAULT_FORM_PROPS: any = {
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
}
