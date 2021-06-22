import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { LOCALES } from '@constants'

import HeaderTitle from '@common/HeaderTitle'
import SubNavLink from '@common/SubNavLink'
import MainLayout from '@layouts/admin/Main'
import Subnavigation from '@common/Subnavigation'

const Dashboard = () => {
    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle title="Dashboard" />
            </MainLayout.Header>
            <Subnavigation>
                <SubNavLink title="Sida 1" href="/admin/dashboard" />
                <SubNavLink title="Sida 2" href="/admin/dashboard/1" />
                <SubNavLink title="Sida 3" href="/admin/dashboard/2" />
            </Subnavigation>
            <MainLayout.Content>
                <p>asda</p>
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Dashboard.getTemplate = (page: React.ReactElement) => (
    <MainLayout.Template>{page}</MainLayout.Template>
)

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
            ])),
        },
    }
}

export default Dashboard
