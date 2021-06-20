/**
 * Renders the top of the admin header, i.e. the user and nation
 * information, as well as some common actions and settings.
 *
 * @module Header
 */
import Link from 'next/link'
import { useAuth } from '@contexts/Auth'
import { useNation } from '@nationskollen/sdk'

import Title from '@common/Title'
import Container from '@common/Container'
import NationIcon from '@common/NationIcon'
import UserPopover from '@components/admin/UserPopover'

const Header = () => {
    const { token, oid, logout } = useAuth()

    // Make sure to "logout" if we are not authenticated
    // and prevent fetching data
    if (!token || !oid) {
        logout()
        return null
    }

    // TODO: Handle error
    const { data } = useNation(oid)

    return (
        <Container as="header" className="relative z-50 text-white bg-primary">
            <div className="flex flex-row items-center justify-between border-b-1 border-primary-extra py-3">
                <div className="flex flex-row items-center space-x-md">
                    <Link href="/admin/dashboard">
                        <a>
                            <NationIcon src={data?.icon_img_src} />
                        </a>
                    </Link>
                    <Title text={data?.name} className="text-white" />
                </div>
                <div className="flex flex-row space-x-md">
                    <UserPopover />
                </div>
            </div>
        </Container>
    )
}

export default Header
