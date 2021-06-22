import { useRef } from 'react'
import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import MainLayout from '@layouts/admin/Main'
import EventPage from '@pages/admin/events/EventPage'
import EventTable from '@pages/admin/events/EventTable'

const UpcomingEventsPage = () => {
    const after = useRef(new Date()).current

    return (
        <EventPage>
            <EventTable id="upcoming" after={after} />
        </EventPage>
    )
}

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

UpcomingEventsPage.getTemplate = (page: React.ReactElement) => (
    <MainLayout.Template>{page}</MainLayout.Template>
)

export default UpcomingEventsPage
