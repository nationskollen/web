import clsx from 'clsx'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { ArrowLeftIcon } from '@heroicons/react/outline'

export interface Props {
    href: string
    className?: string
}

const BackArrow = ({ href, className }: Props) => {
    const { t } = useTranslation('common')

    return (
        <Link href={href} passHref={true}>
            <a
                className={clsx(
                    'h-8 py-2 rounded px-xsm text-text text-md space-x-xsm',
                    'flex flex-row items-center font-bold',
                    'hover:text-text-highlight focus:text-text-highlight',
                    className
                )}
            >
                <ArrowLeftIcon />
                <span>{t('action.back')}</span>
            </a>
        </Link>
    )
}

export default BackArrow
