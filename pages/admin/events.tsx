import React, { useState } from 'react'
import useConstant from 'use-constant'
import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { PlusIcon } from '@heroicons/react/solid'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Button from '@common/Button'
import MainLayout from '@layouts/admin/Main'
import CreateEventForm from '@forms/CreateEventForm'
import TableOfContents from '@common/TableOfContents'

import OldEvents from '@pages/admin-events/OldEvents'
import UpcomingEvents from '@pages/admin-events/UpcomingEvents'

const Events = () => {
    const { t } = useTranslation('admin-events')
    const [modalOpen, setModalOpen] = useState(false)

    const SECTIONS = useConstant(() => [
        { href: '#upcoming', title: t('upcoming.title') },
        { href: '#old', title: t('old.title') },
    ])

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
                    <span>{t('create.title')}</span>
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
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
                'admin-events',
            ])),
        },
    }
}

export default Events
