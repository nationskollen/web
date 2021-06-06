import HeaderTop from '@components/admin/HeaderTop'
import HeaderNavigation from '@components/admin/HeaderNavigation'

const Header = () => {
    return (
        <header className="container relative z-30 mx-auto text-white px-md bg-primary h-admin-header-content">
            <HeaderTop />
            <HeaderNavigation />
        </header>
    )
}

export default Header
