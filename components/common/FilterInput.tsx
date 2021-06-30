import React from 'react'
import { useTranslation } from 'next-i18next'
import { SearchIcon } from '@heroicons/react/outline'

import Input from '@common/Input'

export interface Props {
    id: string
    onChange: (value: string) => void
}

const FilterInput = ({ id, onChange }: Props) => {
    const { t } = useTranslation('common')

    return (
        <Input
            id={`${id}_filter`}
            type="text"
            placeholder={t('filtering.placeholder')}
            onChange={(e) => onChange(e.target.value)}
            debounce={true}
            className="flex-1"
        >
            <SearchIcon />
        </Input>
    )
}

export default FilterInput
