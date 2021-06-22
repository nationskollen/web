import React from 'react'

export interface NavigationContextContract {
    basePath: string
}

export const NavigationContext = React.createContext({} as NavigationContextContract)
export const NavigationProvider = NavigationContext.Provider
export const useNavigation = () => React.useContext(NavigationContext)
