import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { PlusIcon } from '@heroicons/react/solid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Button from '@common/Button'
import MainLayout from '@layouts/admin/Main'
import CreateEventForm from '@forms/CreateEventForm'
import TableOfContents from '@common/TableOfContents'

import OldEvents from '@pages/admin-events/OldEvents'
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
                <OldEvents />
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Events.getTemplate = (page: React.ReactElement) => <MainLayout.Template>{page}</MainLayout.Template>

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, ['common'])),
        },
    }
}

export default Events
