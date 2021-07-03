import React from 'react'
import { AuthenticatedUser } from '@nationskollen/sdk'

export interface AuthContextContract {
    user: AuthenticatedUser
    logout: () => void
}

export const AuthContext = React.createContext({} as AuthContextContract)
export const AuthProvider = AuthContext.Provider
export const useAuth = () => React.useContext(AuthContext)
