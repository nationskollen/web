import HeaderTop from '@components/admin/HeaderTop'
import HeaderNavigation from '@components/admin/HeaderNavigation'

export interface Props {}

const Header = ({}: Props) => {
    return (
        <header className="container relative mx-auto text-white h-admin-header-content">
            <HeaderTop />
            <HeaderNavigation />
        </header>
    )
}

export default Header
