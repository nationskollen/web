import { useState, useEffect } from 'react'
import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useAuth } from '@contexts/Auth'
import { useTranslation } from 'next-i18next'
import { useLocations, Location } from '@nationskollen/sdk'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { InformationCircleIcon, LocationMarkerIcon } from '@heroicons/react/outline'

import Row from '@common/Row'
import Title from '@common/Title'
import Column from '@common/Column'
import IconCircle from '@common/IconCircle'
import SubNavLink from '@common/SubNavLink'
import HeaderTitle from '@common/HeaderTitle'
import ExternalLink from '@common/ExternalLink'
import Subnavigation from '@common/Subnavigation'
import ActivityLevel from '@common/ActivityLevel'
import MainLayout from '@layouts/admin/MainLayout'
import Select, { OptionItem } from '@common/Select'
import LoadingIndicator from '@common/LoadingIndicator'
import OpenCloseButton from '@pages/admin/activity/OpenCloseButton'
import ActivityDashboard from '@pages/admin/activity/ActivityDashboard'

const Activity = () => {
    const { user } = useAuth()
    const { data, isValidating, mutate } = useLocations(user.oid)
    const [selectedLocation, setSelectedLocation] = useState<Location>()
    const { t } = useTranslation(['admin-activity', 'common'])

    const locations = data
        ? data.map((location) => ({
              id: location.id,
              value: location.name,
          }))
        : []

    const handleLocationChange = (option: OptionItem) => {
        // If `None` is selected
        if (option.id === 0) {
            setSelectedLocation(undefined)
        } else if (data) {
            const chosenLocation = data.find((location) => location.id === option.id)

            if (!chosenLocation) {
                return
            }

            setSelectedLocation(chosenLocation)
        }
    }

    useEffect(() => {
        if (data && data.length > 0 && !location) {
            setSelectedLocation(data[0])
        }
    }, [data])

    const location = selectedLocation || (data && data.length > 0 && data[0])

    return (
        <MainLayout.Wrapper>
            <MainLayout.Header>
                <HeaderTitle
                    title={t('admin-activity:page.title')}
                    description={t('admin-activity:page.description')}
                ></HeaderTitle>
            </MainLayout.Header>
            <Subnavigation basePath="/admin/activity">
                <SubNavLink title={t('admin-activity:navigation.activity')} href="/" />
                <SubNavLink title={t('admin-activity:navigation.statistics')} href="/statistics" />
            </Subnavigation>
            <MainLayout.Content>
                {isValidating ? (
                    <div className="flex items-center justify-center w-full py-xlg">
                        <LoadingIndicator size="small" />
                    </div>
                ) : (
                    <>
                        {location && data ? (
                            <Column>
                                <Row className="items-end justify-start border-b-1 border-border pb-md mb-md">
                                    <Row className="items-center w-auto">
                                        <Select
                                            label={t('admin-activity:page.selected_location')}
                                            className="w-[20rem]"
                                            loading={isValidating}
                                            options={locations}
                                            buttonIcon={LocationMarkerIcon}
                                            initialSelection={location.id}
                                            onSelect={handleLocationChange}
                                        />
                                    </Row>
                                    <Row className="mb-xsm">
                                        <div className="flex-1">
                                            <ExternalLink
                                                label={t('admin-activity:activity.update_location')}
                                                href={`/admin/locations/${location.id}`}
                                            />
                                        </div>
                                        <ActivityLevel location={location} />
                                        <OpenCloseButton
                                            location={location}
                                            locations={data}
                                            mutate={mutate}
                                        />
                                    </Row>
                                </Row>
                                <ActivityDashboard location={location} />
                            </Column>
                        ) : (
                            <Column className="items-center justify-center w-full pt-xlg">
                                <IconCircle icon={LocationMarkerIcon} size="large" />
                                <p className="font-bold">
                                    {t('admin-activity:activity.empty.title')}
                                </p>
                                <Row className="w-auto rounded p-md border-1 border-border w-[40rem]">
                                    <InformationCircleIcon className="w-6 h-6" />
                                    <Column>
                                        <Title
                                            size="tiny"
                                            text={t('admin-activity:activity.empty.question')}
                                        />
                                        <pre>{t('admin-activity:activity.empty.answer')}</pre>
                                        <ExternalLink
                                            label={t('admin-activity:activity.empty.add_location')}
                                            href="/admin/locations/create"
                                        />
                                    </Column>
                                </Row>
                            </Column>
                        )}
                    </>
                )}
            </MainLayout.Content>
        </MainLayout.Wrapper>
    )
}

Activity.getTemplate = MainLayout.getTemplate

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale!, [
                ...LOCALES.ADMIN.DEFAULT_NAMESPACES,
                'admin-activity',
            ])),
        },
    }
}

export default Activity
