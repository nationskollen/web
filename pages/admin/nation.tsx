import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { useNation } from '@nationskollen/sdk'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useAuth } from '@contexts/Auth'

import SubNavLink from '@common/SubNavLink'
import MainLayout from '@layouts/admin/Main'
import HeaderTitle from '@common/HeaderTitle'
import Subnavigation from '@common/Subnavigation'

const Nation = () => {
    const { oid } = useAuth()
    const { data } = useNation(oid)
    const { t } = useTranslation('admin-nation')

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <div className="flex flex-row space-x-lg">
                    <HeaderTitle title={data?.name} description={t('page.description')} />
                </div>
            </MainLayout.Header>
            <Subnavigation basePath="/admin/nation">
                <SubNavLink title={t('navigation.general')} href="/" />
                <SubNavLink title={t('navigation.contact')} href="/contact" />
                <SubNavLink title={t('navigation.individuals')} href="/individuals" />
            </Subnavigation>
            <MainLayout.Content>
                <p>asd</p>
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Nation.getTemplate = MainLayout.getTemplate

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
                'admin-nation',
            ])),
        },
    }
}

export default Nation
