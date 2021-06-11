import { useState } from 'react'
import { PlusIcon, ArrowRightIcon, SearchIcon } from '@heroicons/react/solid'

import Input from '@common/Input'
import ModalContent from '@common/ModalContent'
import Button from '@common/Button'
import CardTitle from '@common/CardTitle'
import ModalSteps from '@common/ModalSteps'
import MainLayout from '@layouts/admin/Main'
import TableOfContents from '@common/TableOfContents'
import AdminSection from '@components/admin/AdminSection'

const SECTIONS = [
    { href: '#upcoming', title: 'Kommande evenemang' },
    { href: '#old', title: 'Gamla evenemang' },
]

const Events = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <MainLayout.Wrapper>
            <ModalSteps
                open={modalOpen}
                setOpen={setModalOpen}
                noPadding={true}
                cardTitleClassName="p-md"
                steps={[
                    ({ currentStep, totalSteps, next }) => ({
                        title: 'Skapa ny event',
                        description: `Steg ${currentStep + 1} / ${totalSteps}`,
                        content: (
                            <ModalContent.Wrapper>
                                <ModalContent.Main>
                                    <p>Hello</p>
                                </ModalContent.Main>
                                <ModalContent.Actions className="space-between">
                                    <Button
                                        style="light"
                                        size="small"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        <span>Avbryt</span>
                                    </Button>
                                    <Button style="primary" size="small" onClick={next}>
                                        <span>Välj bild</span>
                                        <ArrowRightIcon />
                                    </Button>
                                </ModalContent.Actions>
                            </ModalContent.Wrapper>
                        ),
                    }),
                    ({ currentStep, totalSteps, previous }) => ({
                        title: 'Lägg till en bild',
                        description: `Steg ${currentStep + 1} / ${totalSteps}`,
                        content: (
                            <ModalContent.Wrapper>
                                <ModalContent.Main>
                                    <p>Bild</p>
                                </ModalContent.Main>
                                <ModalContent.Actions>
                                    <Button style="light" size="small" onClick={previous}>
                                        <span>Tillbaka</span>
                                    </Button>
                                    <Button
                                        style="primary"
                                        size="small"
                                        onClick={() => console.log('submit')}
                                    >
                                        <span>Skapa</span>
                                        <PlusIcon />
                                    </Button>
                                </ModalContent.Actions>
                            </ModalContent.Wrapper>
                        ),
                    }),
                ]}
            />
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
                        description="Översikt av nationens kommande evenemang"
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
                        description="Översikt av nationens gamla evenemang"
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
