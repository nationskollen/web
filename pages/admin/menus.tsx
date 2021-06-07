import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Menus = () => {
    return (
        <Card>
            <p>Menus</p>
        </Card>
    )
}

Menus.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export default Menus
