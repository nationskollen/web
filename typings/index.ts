import React from 'react'
import { NextPage } from 'next'

export type TemplateGetter = (page: React.ReactNode) => React.ReactNode

export type PageComponent = NextPage & {
    getTemplate: TemplateGetter
}
