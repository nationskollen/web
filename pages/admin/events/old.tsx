import { useRef } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { LOCALES } from '@constants'

import MainLayout from '@layouts/admin/Main'
import EventPage from '@layouts/admin/Events'
import EventTable from '@pages/admin/events/EventTable'

const OldEventsPage = () => {
    const before = useRef(new Date()).current

    return (
        <EventPage>
            <EventTable id="old" before={before} />
        </EventPage>
    )
}

OldEventsPage.getTemplate = MainLayout.getTemplate

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

export default OldEventsPage
