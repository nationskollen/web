import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Menus = () => {
    return (
        <Card>
            <p>Menus</p>
        </Card>
    )
}

Menus.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Menus
