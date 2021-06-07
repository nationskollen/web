import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const Nation = () => {
    return (
        <Card>
            <p>Nation</p>
        </Card>
    )
}

Nation.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Nation
