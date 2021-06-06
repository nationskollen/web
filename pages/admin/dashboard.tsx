import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Dashboard = () => {
    return (
        <Card>
            <p>Dashboard</p>
        </Card>
    )
}

Dashboard.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Dashboard
