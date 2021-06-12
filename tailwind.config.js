module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // false or 'media' or 'class'
    theme: {
        colors: {
            'white': 'white',
            'black': 'black',
            'current': 'currentColor',
            'transparent': 'transparent',
            'overlay': 'var(--color-overlay)',
            'focus-default': 'var(--color-focus-default)',
            'focus-primary': 'var(--color-focus-primary)',
            'focus-input': 'var(--color-focus-input)',
            'focus-error': 'var(--color-focus-error)',
            'focus-success': 'var(--color-focus-success)',
            'focus-secondary': 'var(--color-focus-secondary)',
            'primary': 'var(--color-primary)',
            'primary-dark': 'var(--color-primary-dark)',
            'primary-extra': 'var(--color-primary-extra)',
            'primary-highlight': 'var(--color-primary-highlight)',
            'primary-text': 'var(--color-primary-text)',
            'primary-text-light': 'var(--color-primary-text-light)',
            'secondary': 'var(--color-secondary)',
            'secondary-extra': 'var(--color-secondary-extra)',
            'background': 'var(--color-background)',
            'background-extra': 'var(--color-background-extra)',
            'background-highlight': 'var(--color-background-highlight)',
            'card': 'var(--color-card)',
            'border': 'var(--color-border)',
            'border-dark': 'var(--color-border-dark)',
            'text': 'var(--color-text)',
            'text-extra': 'var(--color-text-extra)',
            'text-highlight': 'var(--color-text-highlight)',
            'error': 'var(--color-error)',
            'error-highlight-text': 'var(--color-error-highlight-text)',
            'error-highlight': 'var(--color-error-highlight)',
            'success': 'var(--color-success)',
            'success-highlight-text': 'var(--color-success-highlight-text)',
            'success-highlight': 'var(--color-success-highlight)',
        },
        borderRadius: {
            none: '0',
            sm: '5px',
            DEFAULT: '10px',
            lg: '15px',
            full: '50%',
        },
        borderWidth: {
            0: '0px',
            1: '1px',
            DEFAULT: '1px',
            2: '2px',
        },
        fontFamily: {
            sans: ['Nunito Sans', 'sans-serif'],
        },
        screens: {
            tablet: '640px',
            laptop: '1024px',
            desktop: '1280px',
        },
        extend: {
            spacing: {
                '0': '0',
                'xsm': '0.25rem',
                'sm': '0.5rem',
                'md': '1rem',
                'lg': '1.5rem',
                'xlg': '2.5rem',
                '1/5': '20vh',
                'modal-offset': '15vh',
            },
            height: {
                'admin-header': '16rem',
                'admin-header-fixed': '3.5rem',
                'admin-header-content': '10rem',
            },
            minHeight: {
                dialog: '12rem',
                textarea: '8rem',
            },
            maxHeight: {
                dialog: '20rem',
                textarea: '30rem',
                dropdown: '15rem',
            },
            width: {
                'sidebar-navigation': '18rem',
                'login-modal': '22rem',
                'form-modal': '30rem',
                'dialog': '28rem',
                'user-popover': '22rem',
            },
            minWidth: {
                'modal': '25rem',
                'login-background': '1100px',
            },
            fontSize: {
                xsm: '0.8rem',
                md: '0.95rem',
            },
            inset: {
                'admin-header': '4.5rem',
                '-admin-header': '-4.5rem',
            },
            transitionDuration: {
                in: '75ms',
                out: '50ms',
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ['last', 'dark'],
            borderColor: ['dark'],
            padding: ['last'],
            margin: ['last'],
            filter: ['dark'],
            brightness: ['dark'],
        },
    },
    plugins: [],
    corePlugins: {
        float: false,
        verticalAlign: false,
        mixBlendMode: false,
        hueRotate: false,
        isolation: false,
        invert: false,
        grayscale: false,
        fontVariantNumeric: false,
        fontSmoothing: false,
        clear: false,
        boxDecorationBreak: false,
        backgroundBlendMode: false,
        backdropSepia: false,
        backgroundAttachment: false,
    },
}
