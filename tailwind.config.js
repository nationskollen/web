module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // false or 'media' or 'class'
    theme: {
        colors: {
            'white': 'white',
            'current': 'currentColor',
            'transparent': 'transparent',
            'primary': 'var(--color-primary)',
            'primary-extra': 'var(--color-primary-extra)',
            'primary-highlight': 'var(--color-primary-highlight)',
            'primary-text-light': 'var(--color-primary-text-light)',
            'background': 'var(--color-background)',
            'background-extra': 'var(--color-background-extra)',
            'background-highlight': 'var(--color-background-highlight)',
            'card': 'var(--color-card)',
            'border': 'var(--color-border)',
            'border-dark': 'var(--color-border-dark)',
            'text': 'var(--color-text)',
            'text-highlight': 'var(--color-text-highlight)',
            'error-text': 'var(--color-error-text)',
            'primary-text': 'var(--color-primary-text)',
        },
        spacing: {
            xsm: '0.25rem',
            sm: '0.5rem',
            md: '1rem',
            lg: '1.5rem',
            xlg: '2.5rem',
        },
        borderRadius: {
            none: '0',
            sm: '5px',
            DEFAULT: '10px',
            lg: '15px',
            full: '25%',
        },
        borderWidth: {
            0: '0px',
            1: '1px',
            DEFAULT: '1px',
            2: '2px',
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        screens: {
            tablet: '640px',
            laptop: '1024px',
            desktop: '1280px',
        },
        extend: {
            height: {
                'admin-header': '16rem',
                'admin-header-fixed': '3.5rem',
                'admin-header-content': '10rem',
            },
            width: {
                'sidebar-navigation': '18rem',
            },
            fontSize: {
                xsm: '0.8rem',
            },
            inset: {
                'admin-header': '4.5rem',
            },
        },
    },
    variants: {
        extend: {},
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
