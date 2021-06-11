import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Dashboard = () => {
    return (
        <Card>
            <p>Dashboard</p>
        </Card>
    )
}

Dashboard.getTemplate = (page: React.ReactElement) => (
    <MainLayout.Template>{page}</MainLayout.Template>
)

export default Dashboard
