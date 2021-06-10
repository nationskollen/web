import React, { useState, useEffect } from 'react'
import { isClient } from '@utils'
import { THEME_STORAGE_KEY } from '@constants'

export enum Theme {
    Light = 'light',
    Dark = 'dark',
    Auto = 'auto',
}

export interface ThemeContextContract {
    theme: Theme
    setTheme: (newTheme: Theme) => void
}

export interface Props {
    children: React.ReactElement | React.ReactElement[]
}

export const ThemeContext = React.createContext({} as ThemeContextContract)
export const useTheme = () => React.useContext(ThemeContext)

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>(Theme.Light)

    useEffect(() => {
        if (isClient()) {
            const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

            if (savedTheme && savedTheme !== Theme.Light) {
                const theme = savedTheme as Theme

                if (Object.values(Theme).includes(theme)) {
                    setSelectedTheme(theme)
                } else {
                    // The stored value is invalid
                    localStorage.removeItem(THEME_STORAGE_KEY)
                }
            }
        }
    }, [])

    const setSelectedTheme = (newTheme: Theme) => {
        // TODO: Something is weird with `theme`, e.g.
        // using document.documentElement.classList.remove(theme)
        // does not work
        document.documentElement.classList.remove(Theme.Light)
        document.documentElement.classList.remove(Theme.Dark)

        if (newTheme === Theme.Auto) {
            // Auto mode means that we use whatever the user prefers
            // by using the CSS prefers-* selector.
            localStorage.removeItem(THEME_STORAGE_KEY)
        } else {
            localStorage.setItem(THEME_STORAGE_KEY, newTheme)
            document.documentElement.classList.add(newTheme)
        }

        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setSelectedTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
