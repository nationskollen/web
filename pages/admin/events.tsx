import Button from '@common/Button'
import Section from '@common/Section'
import CardTitle from '@common/CardTitle'
import MainLayout from '@layouts/admin/Main'
import TableOfContents from '@common/TableOfContents'
import { PlusIcon } from '@heroicons/react/solid'

const SECTIONS = [
    { href: '#upcoming', title: 'Kommande evenemang' },
    { href: '#old', title: 'Gamla evenemang' },
]

const Events = () => {
    return (
        <MainLayout.Wrapper>
            <MainLayout.Sidebar>
                <TableOfContents sections={SECTIONS} />
                <Button type="secondary" className="w-full rounded">
                    <span>Skapa ny event</span>
                    <PlusIcon />
                </Button>
            </MainLayout.Sidebar>
            <MainLayout.Content>
                <Section id="upcoming">
                    <CardTitle
                        title="Kommande evenemang"
                        subtitle="Översikt av nationens kommande evenemang"
                    />
                </Section>
                <Section id="old">
                    <CardTitle
                        title="Gamla evenemang"
                        subtitle="Översikt av nationens gamla evenemang"
                    />
                </Section>
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Events.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export default Events
