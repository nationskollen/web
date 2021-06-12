/**
 * Renders a generic textarea input. If no `onChange` handler is specified,
 * it is assumed that you will be using Formik and will therefore
 * require you to have wrapped the input(s) in a Formik form.
 *
 * If you do not wish to use Formik, you **must** set `onChange`
 * to a valid callback function.
 *
 * @module Common
 */
import React from 'react'
import { extend } from '@utils'
import Input, { Props as InputProps } from '@common/Input'

const Textarea = React.forwardRef(({ inputClassName, ...props }: InputProps, ref: React.Ref<any>) => {
    return (
        <Input
            as="textarea"
            size="textarea"
            containerClassName="pr-0"
            inputClassName={extend('min-h-textarea max-h-textarea pt-sm', inputClassName)}
            ref={ref}
            {...props}
        />
    )
})

export default Textarea
