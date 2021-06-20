import { NextPage } from 'next'

export type TemplateGetter = (page: React.ReactElement) => React.ReactElement

export type PageComponent = NextPage & {
    getTemplate: TemplateGetter
}
