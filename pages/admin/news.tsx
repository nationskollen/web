import Card from '@common/Card'
import MainLayout from '@layouts/admin/Main'

const News = () => {
    return (
        <Card>
            <p>News</p>
        </Card>
    )
}

News.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export default News
