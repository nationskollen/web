import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const People = () => {
    return (
        <Card>
            <p>People</p>
        </Card>
    )
}

People.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default People
