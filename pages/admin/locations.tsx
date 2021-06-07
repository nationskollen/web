import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Locations = () => {
    return (
        <Card>
            <p>Locations</p>
        </Card>
    )
}

Locations.getTemplate = (page: React.ReactElement) => (
    <MainLayout.Template>{page}</MainLayout.Template>
)

export default Locations
