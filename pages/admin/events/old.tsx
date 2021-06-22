import { useRef } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { LOCALES } from '@constants'

import EventsLayout from '@layouts/admin/Events'
import EventTable from '@pages/admin/events/EventTable'

const OldEventsPage = () => {
    const before = useRef(new Date()).current

    return (
        <EventTable id="old" before={before} />
    )
}

OldEventsPage.getTemplate = EventsLayout.getTemplate

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
