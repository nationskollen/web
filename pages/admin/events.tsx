import Card from '@common/Card'
import Anchor from '@common/Anchor'
import MainLayout from '@layouts/admin/Main'
import SidebarLayout from '@layouts/admin/Sidebar'

const Events = () => {
    return (
        <SidebarLayout
            links={[
                { href: '#test', title: 'Test' },
                { href: '#test2', title: 'Test2' }
            ]}
        >
            <Anchor id="test">
                <Card>
                    <p style={{ height: '100vh' }}>Events</p>
                </Card>
            </Anchor>
            <Anchor id="test2">
                <Card>
                    <p style={{ height: '100vh' }}>hello</p>
                </Card>
            </Anchor>
        </SidebarLayout>
    )
}

Events.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Events
