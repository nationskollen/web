import React from 'react'
import { useTranslation } from 'next-i18next'
import { useApi, Location } from '@nationskollen/sdk'

import {
    ClockIcon,
    UserRemoveIcon,
    UserAddIcon,
} from '@heroicons/react/outline'

import Row from '@common/Row'
import Input from '@common/Input'
import Title from '@common/Title'
import Button from '@common/Button'
import Column from '@common/Column'
import IconCircle from '@common/IconCircle'
import InputGroup from '@common/InputGroup'
import ProgressBar from '@common/ProgressBar'
import SubmitButton from '@common/SubmitButton'
import LocationCard from '@common/LocationCard'
import ActivityChangeButton from '@pages/admin/activity/ActivityChangeButton'

export interface Props {
    location: Location
}

const ActivityDashboard = ({ location }: Props) => {
    const api = useApi()
    const { t } = useTranslation(['admin-activity', 'common'])

    return (
        <>
            {location && location.is_open ? (
                <Row>
                    <LocationCard src={location.cover_img_src} className="w-[32rem] mr-md">
                        <Title
                            size="tiny"
                            style="uppercase"
                            text={t('admin-activity:activity.capacity')} className="text-white"
                        />
                        <Row className="justify-between">
                            <p>{t('admin-activity:activity.max')}</p>
                            <p>{t('common:activity.people', { count: location.max_capacity})}</p>
                        </Row>
                        <Row className="justify-between">
                            <p>{t('admin-activity:activity.current')}</p>
                            <p>{t('common:activity.people', { count: location.estimated_people_count})}</p>
                        </Row>
                        <ProgressBar
                            current={location.estimated_people_count}
                            max={location.max_capacity}
                            multiColor={true}
                        />
                    </LocationCard>
                    <Column className="flex-1 h-full">
                        <Title size="small" text={t('admin-activity:activity.update.title')} />
                        <Column className="h-full">
                            <InputGroup className="h-full">
                                <ActivityChangeButton locationId={location.id} type="decrease"/>
                                <ActivityChangeButton locationId={location.id} type="increase"/>
                            </InputGroup>
                            <InputGroup label={t('admin-activity:activity.update.set_manually')}>
                                <Row>
                                    <Input
                                        type="number"
                                        min={0}
                                        max={location.max_capacity}
                                        placeholder={t('admin-activity:activity.field.manual')}
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
            ) : (
                <Column className="items-center">
                    <IconCircle icon={ClockIcon} size="large" />
                    <p className="font-bold">
                        {t('admin-activity:activity.currently_closed')}
                    </p>
                </Column>
            )}
        </>
    )
}

export default ActivityDashboard
