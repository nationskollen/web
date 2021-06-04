import NavLink from '@common/NavLink'

export interface Props {}

const HeaderNavigation = ({}: Props) => {
    return (
        <nav className="w-full h-auto mx-auto py-sm">
            <ul className="flex row space-x-sm">
                <NavLink title="Startsida" href="/admin/dashboard" />
                <NavLink title="Nyheter" href="/admin/news" />
                <NavLink title="Evenemang" href="/admin/events" />
                <NavLink title="Platser" href="/admin/locations" />
                <NavLink title="Personer" href="/admin/people" />
                <NavLink title="Öppettider" href="/admin/hours" />
                <NavLink title="Aktivitet" href="/admin/activity" />
                <NavLink title="Nation" href="/admin/nation" />
                <NavLink title="Användare" href="/admin/users" />
            </ul>
        </nav>
    )
}

export default HeaderNavigation
