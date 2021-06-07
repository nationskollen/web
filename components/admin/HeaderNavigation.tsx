import NavLink from '@common/NavLink'

export interface Props {}

const HeaderNavigation = ({}: Props) => {
    return (
        <nav className="h-auto py-sm">
            <ul className="flex flex-row space-x-sm">
                <NavLink title="Hem" href="/admin/dashboard" />
                <NavLink title="Nyheter" href="/admin/news" />
                <NavLink title="Evenemang" href="/admin/events" />
                <NavLink title="Menyer" href="/admin/menus" />
                <NavLink title="Platser" href="/admin/locations" />
                <NavLink title="Aktivitet" href="/admin/activity" />
                <NavLink title="Nation" href="/admin/nation" />
                <NavLink title="Användare" href="/admin/users" />
            </ul>
        </nav>
    )
}

export default HeaderNavigation
