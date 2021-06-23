import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { LOCALES } from '@constants'

import SubNavLink from '@common/SubNavLink'
import HeaderTitle from '@common/HeaderTitle'
import Subnavigation from '@common/Subnavigation'
import MainLayout from '@layouts/admin/MainLayout'

const Dashboard = () => {
    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle title="Dashboard" />
            </MainLayout.Header>
            <Subnavigation basePath="/admin/dashboard">
                <SubNavLink title="Sida 1" href="/" />
                <SubNavLink title="Sida 2" href="/page2" />
                <SubNavLink title="Sida 3" href="/page3" />
            </Subnavigation>
            <MainLayout.Content>
                <p>asda</p>
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Dashboard.getTemplate = MainLayout.getTemplate

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
