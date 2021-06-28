/**
 * Renders a file upload component. Uses the `Input` component
 * internally, and therefore accepts all of the same props.
 *
 * Note that if you want to use this component in a form,
 * you **must** wrap your form in the `FormProvider` component
 * from react-hook-form.
 *
 * @module Common
 */
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useFormContext } from 'react-hook-form'
import { TrashIcon, CloudUploadIcon } from '@heroicons/react/outline'

import { DEFAULT_ACCEPT_FORMATS } from '@constants'

import Button from '@common/Button'
import LoadingIndicator from '@common/LoadingIndicator'
import Input, { Props as InputProps } from '@common/Input'

export interface UploadPreviewProps {
    files: FileList | null
    onRemove: () => void
    loading?: boolean
}

export interface Props extends Omit<InputProps, 'accept'> {
    accept?: Array<string>
}

const UploadPreviewEmpty = () => {
    const { t } = useTranslation('admin-common')

    return (
        <div
            className={clsx(
                'absolute inset-0 h-full rounded-sm pointer-events-none',
                'bg-background dark:bg-background-extra flex flex-col justify-center items-center'
            )}
        >
            <div className="flex flex-col items-center justify-center space-y-sm">
                <CloudUploadIcon className="w-16 h-16" />
                <p className="font-bold">{t('file_upload.select_image')}</p>
            </div>
        </div>
    )
}

const UploadPreview = ({ files, loading, onRemove }: UploadPreviewProps) => {
    const { t } = useTranslation('common')

    if (!files || files.length === 0) {
        return <UploadPreviewEmpty />
    }

    return (
        <>
            {loading ? (
                <div
                    className={clsx(
                        'absolute inset-0 w-full h-full rounded-sm',
                        'bg-overlay z-10 flex justify-center items-center'
                    )}
                >
                    <LoadingIndicator size="medium" />
                </div>
            ) : (
                <div
                    className={clsx(
                        'flex flex-row absolute top-sm right-sm space-x-sm z-10',
                        'transition-opacity opacity-0 group-hover:opacity-100 duration-200'
                    )}
                >
                    <Button
                        size="small"
                        radius="large"
                        style="transparent"
                        className="text-white bg-overlay hover:bg-black transition-colors duration-100"
                        onClick={onRemove}
                    >
                        <span>{t('action.delete')}</span>
                        <TrashIcon />
                    </Button>
                </div>
            )}
            <img
                src={URL.createObjectURL(files[0])}
                className={clsx(
                    'absolute inset-0 object-cover w-full h-full',
                    'rounded-sm pointer-events-none bg-background dark:bg-background-extra'
                )}
            />
        </>
    )
}

const FileUploadInput = React.forwardRef(
    ({ name, accept, onChange, loading, ...props }: Props, ref: React.Ref<any>) => {
        const form = useFormContext()
        const [files, setFiles] = useState<FileList | null>(null)
        const acceptedFiles = (accept || DEFAULT_ACCEPT_FORMATS).join(',')

        const handleRemove = () => {
            if (!files || files.length === 0) {
                return
            }

            name && form && form.setValue(name, undefined)
            setFiles(null)
        }

        const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files

            if (files && files.length > 0) {
                setFiles(files)
            }

            onChange && onChange(e)
        }

        // Check if there is saved form state for this field
        useEffect(() => {
            if (!form || !name) {
                return
            }

            const savedFileList = form.getValues(name)

            if (savedFileList && savedFileList.length > 0) {
                setFiles(savedFileList)
            }
        }, [])

        return (
            <Input
                ref={ref}
                name={name}
                type="file"
                title=" "
                onChange={handleUpload}
                hideErrorIcon={true}
                containerClassName="relative h-64 group"
                accept={acceptedFiles}
                inputClassName="z-behind"
                innerComponent={() => (
                    <UploadPreview files={files} loading={loading} onRemove={handleRemove} />
                )}
                {...props}
            />
        )
    }
)

export default FileUploadInput
