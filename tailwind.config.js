module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
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
            'secondary-highlight': 'var(--color-secondary-highlight)',
            'secondary-highlight-text': 'var(--color-secondary-highlight-text)',
            'background': 'var(--color-background)',
            'background-extra': 'var(--color-background-extra)',
            'background-highlight': 'var(--color-background-highlight)',
            'lighter': 'var(--color-lighter)',
            'hover': 'var(--color-hover)',
            'card': 'var(--color-card)',
            'border': 'var(--color-border)',
            'border-dark': 'var(--color-border-dark)',
            'text': 'var(--color-text)',
            'text-extra': 'var(--color-text-extra)',
            'text-highlight': 'var(--color-text-highlight)',
            'error': 'var(--color-error)',
            'error-text': 'var(--color-error-text)',
            'error-highlight-text': 'var(--color-error-highlight-text)',
            'error-highlight': 'var(--color-error-highlight)',
            'success': 'var(--color-success)',
            'success-highlight-text': 'var(--color-success-highlight-text)',
            'success-highlight': 'var(--color-success-highlight)',
            'activity-closed': 'var(--color-activity-closed)',
            'activity-low': 'var(--color-activity-low)',
            'activity-medium': 'var(--color-activity-medium)',
            'activity-high': 'var(--color-activity-high)',
            'activity-very-high': 'var(--color-activity-very-high)',
            'activity-full': 'var(--color-activity-full)',
        },
        backgroundImage: {
            'card-overlay': 'var(--color-card-overlay)',
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
            4: '4px',
        },
        fontFamily: {
            sans: ['Nunito Sans', 'sans-serif'],
        },
        screens: {
            tablet: '640px',
            laptop: '1024px',
            desktop: '1300px',
        },
        extend: {
            spacing: {
                '0': '0',
                'xxsm': '2px',
                'xsm': '0.25rem',
                'sm': '0.5rem',
                'md': '1rem',
                'lg': '1.5rem',
                'xlg': '2.5rem',
                'xxlg': '5rem',
                '1/5': '20vh',
                'modal-offset': '15vh',
                'dialog-offset': '30vh',
                'sidebar-offset': '4rem',
                'admin-header-offset': 'calc(var(--admin-header-height) + 2.5rem)',
                'table-row': 'var(--table-row-height)',
            },
            height: {
                'admin-header': 'var(--admin-header-height)',
                'table-row': 'var(--table-row-height)',
            },
            minHeight: {
                'header': '8rem',
                'dialog': '12rem',
                'textarea-small': '5rem',
                'textarea': '8rem',
                'textarea-large': '16rem',
                'notifications': '8rem',
                'table': 'calc(var(--table-row-height) * 2)',
                'table-empty': 'calc(var(--table-row-height) * 3)',
            },
            maxHeight: {
                'dialog': '20rem',
                'textarea': '30rem',
                'textarea-small': '10rem',
                'textarea': '30rem',
                'textarea-large': '60rem',
                'dropdown': '15rem',
            },
            width: {
                'sidebar-navigation': '14rem',
                'login-modal': '22rem',
                'form-modal': '30rem',
                'dialog': '30rem',
                'user-popover': '20rem',
                'menu-popover': '10rem',
                'pagination-counter': '3rem',
                'sidebar': '4rem',
            },
            minWidth: {
                'modal': '25rem',
                'login-background': '1100px',
                'select': '12rem',
            },
            maxWidth: {
                notifications: '25rem',
                content: '1200px',
                form: '35rem',
            },
            fontSize: {
                xsm: '0.8rem',
                md: '0.95rem',
            },
            transitionDuration: {
                in: '75ms',
                out: '50ms',
            },
        },
    },
}
