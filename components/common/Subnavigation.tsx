import React from 'react'
import { useRouter } from 'next/router'
import { NavigationProvider } from '@contexts/Navigation'

import Container from '@common/Container'

export interface Props {
    basePath: string
    queryKey?: string
    children?: React.ReactNode
}

const Subnavigation = ({ basePath, queryKey, children }: Props) => {
    const { query } = useRouter()
    let calculatedBasePath = basePath

    if (queryKey) {
        calculatedBasePath = `${basePath}/${query[queryKey]}`
    }

    return (
        <NavigationProvider value={{ basePath: calculatedBasePath }}>
            <Container as="nav" role="navigation" className="w-full">
                <ul className="flex flex-row text-md space-x-lg">{children}</ul>
            </Container>
        </NavigationProvider>
    )
}

export default Subnavigation
