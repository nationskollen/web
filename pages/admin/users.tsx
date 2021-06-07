import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Users = () => {
    return (
        <Card>
            <p>Users</p>
        </Card>
    )
}

Users.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Users
