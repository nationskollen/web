import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Activity = () => {
    return (
        <Card>
            <p>Activity</p>
        </Card>
    )
}

Activity.getTemplate = (page: React.ReactElement) => (
    <MainLayout.Template>{page}</MainLayout.Template>
)

export default Activity
