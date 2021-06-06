import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Hours = () => {
    return (
        <Card>
            <p>Hours</p>
        </Card>
    )
}

Hours.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Hours
