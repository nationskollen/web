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

export type InitialSizes = 'small' | 'default' | 'large'

export interface Props extends InputProps {
    initialSize?: InitialSizes
}

const INITIAL_SIZES: Record<InitialSizes, string> = {
    small: 'min-h-textarea-small max-h-textarea-small',
    default: 'min-h-textarea max-h-textarea',
    large: 'min-h-textarea-large max-h-textarea-large',
}

const Textarea = React.forwardRef(
    ({ type, inputClassName, initialSize, ...props }: Props, ref: React.Ref<any>) => {
        const initialSizing = INITIAL_SIZES[initialSize || 'default']

        return (
            <Input
                as="textarea"
                size="auto"
                type={type || 'text'}
                containerClassName="pr-0"
                inputClassName={clsx('pt-sm', inputClassName, initialSizing)}
                hideErrorIcon={true}
                ref={ref}
                {...props}
            />
        )
    }
)

export default Textarea
