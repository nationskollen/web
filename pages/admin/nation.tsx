import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Nation = () => {
    return (
        <Card>
            <p>Nation</p>
        </Card>
    )
}

Nation.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export default Nation
