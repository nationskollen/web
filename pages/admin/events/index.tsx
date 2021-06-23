import { useRef } from 'react'
import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import EventsLayout from '@layouts/admin/EventsLayout'
import EventTable from '@pages/admin/events/EventTable'

const UpcomingEventsPage = () => {
    const after = useRef(new Date()).current

    return <EventTable id="upcoming" after={after} />
}

UpcomingEventsPage.getTemplate = EventsLayout.getTemplate

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

export default UpcomingEventsPage
