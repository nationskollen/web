import React from 'react'

export interface AuthContextContract {
    token: string | null
}

export const AuthContext = React.createContext({} as AuthContextContract)
export const AuthProvider = AuthContext.Provider
export const useAuth = () => React.useContext(AuthContext)
