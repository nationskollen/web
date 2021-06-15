import React, { useState } from 'react'
import { combine } from '@utils'
import { UseFormSetValue } from 'react-hook-form'
import { TrashIcon, CloudUploadIcon } from '@heroicons/react/outline'

import Button from '@common/Button'
import LoadingIndicator from '@common/LoadingIndicator'
import Input, { Props as InputProps } from '@common/Input'

export interface Props extends InputProps {
    setValue?: UseFormSetValue<any>
}

const FileUploadInput = React.forwardRef(
    ({ name, onChange, loading, setValue, ...props }: Props, ref: React.Ref<any>) => {
        const [image, setImage] = useState<Blob | null>(null)

        const removeUploadedImage = () => {
            if (!image) {
                return
            }

            name && setValue && setValue(name, undefined)
            setImage(null)
        }

        const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files

            if (files && files.length > 0) {
                setImage(files[0])
            }

            onChange && onChange(e)
        }

        return (
            <Input
                ref={ref}
                name={name}
                type="file"
                title=" "
                onChange={handleUpload}
                hideErrorIcon={true}
                containerClassName="relative h-64 group"
                accept="image/png, image/jpeg, image/jpg, image/svg"
                inputClassName="z-behind"
                innerComponent={() => (
                    <>
                        {image ? (
                            <>
                                {loading ? (
                                    <div
                                        className={combine(
                                            'absolute inset-0 w-full h-full rounded-sm',
                                            'bg-overlay z-10 flex justify-center items-center'
                                        )}
                                    >
                                        <LoadingIndicator size="medium" />
                                    </div>
                                ) : (
                                    <div
                                        className={combine(
                                            'flex flex-row absolute top-sm right-sm space-x-sm z-10',
                                            'transition-opacity opacity-0 group-hover:opacity-100 duration-200'
                                        )}
                                    >
                                        <Button
                                            size="small"
                                            radius="large"
                                            style="transparent"
                                            className="text-white bg-overlay hover:bg-black transition-colors duration-100"
                                            onClick={removeUploadedImage}
                                        >
                                            <span>Ta bort</span>
                                            <TrashIcon />
                                        </Button>
                                    </div>
                                )}
                                <img
                                    src={URL.createObjectURL(image)}
                                    className={combine(
                                        'absolute inset-0 object-cover w-full h-full',
                                        'rounded-sm pointer-events-none bg-background-extra'
                                    )}
                                />
                            </>
                        ) : (
                            <div
                                className={combine(
                                    'absolute inset-0 h-full rounded-sm pointer-events-none',
                                    'bg-background-extra flex flex-col justify-center items-center'
                                )}
                            >
                                <div className="flex flex-col items-center justify-center space-y-sm">
                                    <CloudUploadIcon className="w-16 h-16" />
                                    <p className="font-bold">Klicka för att välja bild</p>
                                </div>
                            </div>
                        )}
                    </>
                )}
                {...props}
            />
        )
    }
)

export default FileUploadInput
