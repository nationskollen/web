import Section from '@common/Section'
import CardTitle from '@common/CardTitle'
import MainLayout from '@layouts/admin/Main'
import SidebarLayout from '@layouts/admin/Sidebar'

const Events = () => {
    return (
        <SidebarLayout
            links={[
                { href: '#create', title: 'Skapa nytt evenemang' },
                { href: '#upcoming', title: 'Kommande evenemang' },
                { href: '#old', title: 'Gamla evenemang' },
            ]}
        >
            <Section id="create">
                <CardTitle title="Skapa nytt evenemang" subtitle="Skapa en ny kommande event" />
            </Section>
            <Section id="upcoming">
                <CardTitle title="Kommande evenemang" subtitle="Översikt av nationens kommande evenemang" />
            </Section>
            <Section id="old">
                <CardTitle title="Gamla evenemang" subtitle="Översikt av nationens gamla evenemang" />
            </Section>
        </SidebarLayout>
    )
}

Events.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Events
