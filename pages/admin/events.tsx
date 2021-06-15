import React, { useState } from 'react'
import { PlusIcon, SearchIcon } from '@heroicons/react/solid'

import Input from '@common/Input'
import Button from '@common/Button'
import CardTitle from '@common/CardTitle'
import MainLayout from '@layouts/admin/Main'
import CreateEventForm from '@forms/CreateEventForm'
import TableOfContents from '@common/TableOfContents'
import AdminSection from '@components/admin/AdminSection'

import UpcomingEvents from '@pages/admin-events/UpcomingEvents'

const SECTIONS = [
    { href: '#upcoming', title: 'Kommande evenemang' },
    { href: '#old', title: 'Gamla evenemang' },
]

const Events = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <MainLayout.Wrapper>
            <CreateEventForm open={modalOpen} setOpen={setModalOpen} />
            <MainLayout.Sidebar>
                <TableOfContents sections={SECTIONS} />
                <Button
                    style="secondary"
                    radius="large"
                    className="w-full"
                    onClick={() => setModalOpen(true)}
                >
                    <span>Skapa ny event</span>
                    <PlusIcon />
                </Button>
            </MainLayout.Sidebar>
            <MainLayout.Content>
                <UpcomingEvents />
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
