import Section from '@common/Section'
import MainLayout from '@layouts/admin/Main'
import SidebarLayout from '@layouts/admin/Sidebar'

const Events = () => {
    return (
        <SidebarLayout
            links={[
                { href: '#test', title: 'Test' },
                { href: '#test2', title: 'Test2' },
            ]}
        >
            <Section id="test">
                <p style={{ height: '100vh' }}>Events</p>
            </Section>
            <Section id="test2">
                <p style={{ height: '100vh' }}>Events 2</p>
            </Section>
        </SidebarLayout>
    )
}

Events.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Events
