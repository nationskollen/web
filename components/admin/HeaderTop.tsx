/**
 * Renders the top of the admin header, i.e. the user and nation
 * information, as well as some common actions and settings.
 *
 * @module Header
 */
import Router from 'next/router'

import Button from '@common/Button'
import { AUTH } from '@constants'
import { useAuth } from '@contexts/auth'
import { LogoutIcon } from '@heroicons/react/outline'

const HeaderTop = () => {
    const { token } = useAuth()

    const logout = () => {
        localStorage.removeItem(AUTH.TOKEN_STORAGE_KEY)
        Router.replace('/admin/login')
    }

    return (
        <section className="container py-3 mx-auto border-b-1 border-primary-extra">
            <div className="flex flex-row items-center justify-between">
                <p>Logo - {token}</p>
                <Button
                    type="transparent"
                    onClick={logout}
                    className="rounded border-1 border-primary-extra hover:bg-primary-extra"
                >
                    <span>Logga ut</span>
                    <LogoutIcon />
                </Button>
            </div>
        </section>
    )
}

export default HeaderTop
