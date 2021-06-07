import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Locations = () => {
    return (
        <Card>
            <p>Locations</p>
        </Card>
    )
}

Locations.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Locations
