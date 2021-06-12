import React, { useState } from 'react'
import { combine } from '@utils'
import { TrashIcon, CloudUploadIcon } from '@heroicons/react/outline'

import Button from '@common/Button'
import Input, { Props as InputProps } from '@common/Input'

export interface Props extends InputProps {
}

const FileUploadInput = React.forwardRef(({ onChange, ...props }: Props, _) => {
    const [image, setImage] = useState<Blob | null>(null)

    const removeUploadedImage = () => {
        if (!image) {
            return
        }

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
            type="file"
            containerClassName="relative h-64 group"
            inputClassName="z-behind"
            innerComponent={() => (
                <>
                    {image ? (
                        <>
                            <img
                                src={URL.createObjectURL(image)}
                                className={combine(
                                    'absolute inset-0 object-cover w-full h-full',
                                    'rounded-sm pointer-events-none bg-background-extra',
                                )}
                            />
                            <div className={combine(
                                'flex flex-row absolute top-sm right-sm space-x-sm',
                                'transition-opacity opacity-0 group-hover:opacity-100 duration-200',
                            )}>
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
                        </>
                    ) : (
                        <div className={combine(
                            'absolute inset-0 h-full rounded-sm pointer-events-none',
                            'bg-background-extra flex flex-col justify-center items-center',
                        )}>
                            <div className="flex flex-col items-center justify-center space-y-sm">
                                <CloudUploadIcon className="w-16 h-16" />
                                <p className="font-bold">Klicka för att välja bild</p>
                            </div>
                        </div>
                    )}
                </>
            )}
            onChange={handleUpload}
            accept="image/png, image/jpeg, image/jpg, image/svg"
            title=" "
            {...props}
        >
        </Input>
    )
})

export default FileUploadInput
