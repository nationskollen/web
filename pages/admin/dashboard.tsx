import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'
import SuccessDialog from '@common/dialogs/SuccessDialog'

const Dashboard = () => {
    return (
        <Card>
            <SuccessDialog
                title="N[got blev fel]"
                description="Jag 'r en beskrvning'"
                onCancel={() => console.log('asda')}
                onConfirm={() => console.log('confirm')}
            />
            <p>Dashboard</p>
        </Card>
    )
}

Dashboard.getTemplate = (page: React.ReactElement) => (
    <MainLayout.Template>{page}</MainLayout.Template>
)

export default Dashboard
