import React from 'react'

// Allow generic type parameters to be inferred from usage
declare module 'react' {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: ForwardedRef<T>) => ReactElement | null
    ): (props: P & RefAttributes<T>) => ReactElement | null
}
