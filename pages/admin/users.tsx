import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Users = () => {
    return (
        <Card>
            <p>Users</p>
        </Card>
    )
}

Users.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export default Users
