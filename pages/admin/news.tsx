import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const News = () => {
    return (
        <Card>
            <p>News</p>
        </Card>
    )
}

News.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default News
