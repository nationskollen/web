import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Events = () => {
    return (
        <Card>
            <p>Events</p>
        </Card>
    )
}

Events.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Events
