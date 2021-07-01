import { useState, useEffect } from 'react'
import { LOCALES } from '@constants'
import { GetStaticProps } from 'next'
import { useAuth } from '@contexts/Auth'
import { useTranslation } from 'next-i18next'
import { useLocations, useActivityLevel, Location } from '@nationskollen/sdk'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UserRemoveIcon, UserAddIcon, LocationMarkerIcon } from '@heroicons/react/outline'

import Row from '@common/Row'
import Input from '@common/Input'
import Title from '@common/Title'
import Column from '@common/Column'
import Button from '@common/Button'
import InputGroup from '@common/InputGroup'
import SubNavLink from '@common/SubNavLink'
import HeaderTitle from '@common/HeaderTitle'
import SubmitButton from '@common/SubmitButton'
import ExternalLink from '@common/ExternalLink'
import LocationCard from '@common/LocationCard'
import Subnavigation from '@common/Subnavigation'
import MainLayout from '@layouts/admin/MainLayout'
import Select, { OptionItem } from '@common/Select'
import LoadingIndicator from '@common/LoadingIndicator'

const Activity = () => {
    const { oid } = useAuth()
    const { data, isValidating } = useLocations(oid)
    const [selectedLocation, setSelectedLocation] = useState<Location>()
    // const activity = useActivityLevel(location && location.id)
    const { t } = useTranslation(['admin-activity', 'common'])

    const locations = data ? data.map((location) => ({
        id: location.id, value: location.name,
    })) : []

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
                >
                </HeaderTitle>
            </MainLayout.Header>
            <Subnavigation basePath="/admin/activity">
                <SubNavLink title="Aktivitetsräknare" href="/" />
                <SubNavLink title="Statistik" href="/statistics" />
            </Subnavigation>
            <MainLayout.Content>
                {isValidating ? (
                    <div className="flex items-center justify-center w-full py-xlg">
                        <LoadingIndicator size="small" />
                    </div>
                ) : (
                    <>
                        {location ? (
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
                                            <ExternalLink label="Hantera plats" href={`/admin/locations/${location.id}`}/>
                                        </div>
                                        <div className="flex flex-row items-center px-md">
                                            <span className="relative w-2 h-2 rounded-full bg-success dark:bg-success-highlight-text mr-sm">
                                                <span className="absolute inset-0 w-full h-full rounded-full animate-ping bg-success dark:bg-success-highlight-text" />
                                            </span>
                                            <p className="font-bold text-text-highlight">Låg aktivitet</p>
                                        </div>
                                        <Button style="error-border" size="medium">
                                            <span>Stäng plats</span>
                                        </Button>
                                    </Row>
                                </Row>
                                <Row>
                                    <LocationCard src={location.cover_img_src} className="w-[32rem] mr-md">
                                        <Title size="tiny" style="uppercase" text="Kapacitet" className="text-white" />
                                        <Row className="justify-between">
                                            <p>Max:</p>
                                            <p>{location.max_capacity} personer</p>
                                        </Row>
                                        <Row className="justify-between">
                                            <p>Just nu (ca):</p>
                                            <p>{location.estimated_people_count} personer</p>
                                        </Row>
                                        <div className="w-full h-2 overflow-hidden rounded-sm mt-md bg-secondary-extra">
                                            <div
                                                className="h-full bg-success filter brightness-150"
                                                style={{
                                                    width: `${(location.estimated_people_count / location.max_capacity) * 100}%`
                                                }}
                                            />
                                        </div>
                                    </LocationCard>
                                    <Column className="flex-1 h-full">
                                        <Title size="small" text="Uppdatera aktivitet" />
                                        <Column className="h-full">
                                            <InputGroup className="h-full">
                                                <Button
                                                    style="error"
                                                    size="auto"
                                                    direction="column"
                                                    className="text-lg"
                                                >
                                                    <UserRemoveIcon className="w-10 h-10" />
                                                    <span>Minska med 1</span>
                                                </Button>
                                                <Button
                                                    style="success"
                                                    size="auto"
                                                    direction="column"
                                                    className="text-lg"
                                                >
                                                    <UserAddIcon className="w-10 h-10" />
                                                    <span>Öka med 1</span>
                                                </Button>
                                            </InputGroup>
                                            <InputGroup label="Sätt antal besökare">
                                                <Row>
                                                    <Input
                                                        type="number"
                                                        min={0}
                                                        max={location.max_capacity}
                                                        placeholder="Exakt antal besökare"
                                                        className="flex-1"
                                                    />
                                                    <SubmitButton
                                                        type="save"
                                                        style="light"
                                                        label={t('common:action.save')}
                                                    />
                                                </Row>
                                            </InputGroup>
                                        </Column>
                                    </Column>
                                </Row>
                            </Column>
                        ) : (
                            <Column className="items-center justify-center w-full pt-xlg">
                                <LocationMarkerIcon className="w-20 h-20 text-text-extra"/>
                                <p>Du har inte valt någon plats</p>
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
