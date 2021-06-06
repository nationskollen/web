import HeaderNavigation from '@components/admin/HeaderNavigation'

const FixedHeader = () => {
    return (
        <header className="fixed top-0 z-20 w-full text-sm h-admin-header-fixed bg-primary">
            <div className="container flex flex-row items-center justify-between h-full mx-auto px-md">
                <h1>Test</h1>
                <HeaderNavigation />
            </div>
        </header>
    )
}

export default FixedHeader
