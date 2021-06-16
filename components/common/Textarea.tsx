/**
 * Renders a generic textarea input.
 * This uses the {@link Input} component under the hood and
 * accepts all of the same props. This means that the usage is
 * the same.
 *
 * @module Common
 */
import clsx from 'clsx'
import React from 'react'
import Input, { Props as InputProps } from '@common/Input'

const Textarea = React.forwardRef(
    ({ inputClassName, ...props }: InputProps, ref: React.Ref<any>) => {
        return (
            <Input
                as="textarea"
                size="auto"
                containerClassName="pr-0"
                inputClassName={clsx('min-h-textarea max-h-textarea pt-sm', inputClassName)}
                hideErrorIcon={true}
                ref={ref}
                {...props}
            />
        )
    }
)

export default Textarea
