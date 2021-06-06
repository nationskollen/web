import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Activity = () => {
    return (
        <Card>
            <p>Activity</p>
        </Card>
    )
}

Activity.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Activity
