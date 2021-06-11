import { useState } from 'react'

import Input from '@common/Input'
import Modal from '@common/Modal'
import Button from '@common/Button'
import AdminSection from '@components/admin/AdminSection'
import CardTitle from '@common/CardTitle'
import MainLayout from '@layouts/admin/Main'
import TableOfContents from '@common/TableOfContents'
import { PlusIcon, SearchIcon } from '@heroicons/react/solid'

const SECTIONS = [
    { href: '#upcoming', title: 'Kommande evenemang' },
    { href: '#old', title: 'Gamla evenemang' },
]

const Events = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <MainLayout.Wrapper>
            <Modal
                open={modalOpen}
                setOpen={setModalOpen}
                title="Skapa ny event"
                description="Beskrivning"
            >
                <Button style="primary">
                    <span>hello</span>
                </Button>
            </Modal>

            <MainLayout.Sidebar>
                <TableOfContents sections={SECTIONS} />
                <Button
                    style="secondary"
                    className="w-full rounded"
                    onClick={() => setModalOpen((open) => !open)}
                >
                    <span>Skapa ny event</span>
                    <PlusIcon />
                </Button>
            </MainLayout.Sidebar>
            <MainLayout.Content>
                <AdminSection id="upcoming">
                    <CardTitle
                        title="Kommande evenemang"
                        subtitle="Översikt av nationens kommande evenemang"
                    >
                        <Input
                            id="upcoming_filter"
                            type="text"
                            placeholder="Filtrera"
                            onChange={(value) => console.log(value)}
                        >
                            <SearchIcon />
                        </Input>
                    </CardTitle>
                </AdminSection>
                <AdminSection id="old">
                    <CardTitle
                        title="Gamla evenemang"
                        subtitle="Översikt av nationens gamla evenemang"
                    >
                        <Input
                            id="old_filter"
                            type="text"
                            placeholder="Filtrera"
                            onChange={(value) => console.log(value)}
                        >
                            <SearchIcon />
                        </Input>
                    </CardTitle>
                </AdminSection>
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Events.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export default Events
