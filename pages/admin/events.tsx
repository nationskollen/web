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
                <button className="flex flex-row items-center justify-center w-full h-12 font-bold text-white rounded bg-secondary hover:bg-secondary-extra">
                    Skapa ny event
                    <PlusIcon className="w-lg h-lg ml-xsm" />
                </button>
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
