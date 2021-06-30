import { useTranslation } from 'next-i18next'
import { PaginationMeta } from '@nationskollen/sdk'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

import Button from '@common/Button'

export interface Props {
    page?: number
    pagination?: PaginationMeta
    setPage: (page: number) => void
}

const PaginationActions = ({ page, pagination, setPage }: Props) => {
    const { t } = useTranslation('common')

    const handlePrevious = () => {
        if (!page || page === 1) {
            return
        }

        setPage(page - 1)
    }

    const handleNext = () => {
        if (!page || page === pagination?.last_page) {
            return
        }

        setPage(page + 1)
    }

    return (
        <div className="flex flex-row items-center justify-end w-full">
            <p className="text-sm font-bold text-center px-md">
                {t('pagination.page', {
                    current: page || 1,
                    total: pagination?.last_page || 1,
                })}
            </p>
            <div className="space-x-sm">
                <Button
                    style="light"
                    size="icon-small"
                    onClick={handlePrevious}
                    disabled={!page || page === 1}
                >
                    <ChevronLeftIcon />
                </Button>
                <Button
                    style="light"
                    size="icon-small"
                    onClick={handleNext}
                    disabled={!page || page === pagination?.last_page}
                >
                    <ChevronRightIcon />
                </Button>
            </div>
        </div>
    )
}

export default PaginationActions
