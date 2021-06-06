import { NextPage } from 'next'

export type LayoutGetter = (page: React.ReactElement) => React.ReactElement

export type PageComponent = NextPage & {
    getLayout: LayoutGetter
}
