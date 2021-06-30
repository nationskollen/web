import React, { useMemo } from 'react'
import { DEFAULT_FORM_PROPS } from '@constants'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'

import Row from '@common/Row'
import Column from '@common/Column'
import Sidebar from '@common/Sidebar'
import FormSection from '@common/FormSection'
import TableOfContents, { Section } from '@common/TableOfContents'

export interface FormSection extends Section {
    component: React.ElementType
    icon?: React.ElementType
}

export interface Props<T> {
    submit: SubmitHandler<T>
    sections?: Array<FormSection>
    sidebarContent?: React.ReactNode
    children?: React.ReactNode
}

const Form = <T,>({ submit, sections, sidebarContent, children }: Props<T>) => {
    const form = useForm(DEFAULT_FORM_PROPS)

    const { toc, renderedChildren } = useMemo(() => {
        if (!sections || sections.length === 0) {
            return {
                toc: [],
                renderedChildren: [],
            }
        }

        return {
            toc: sections.map(({ href, title }) => ({ href, title })),
            renderedChildren: sections.map(({ href, component: Component, ...options }) => (
                <FormSection key={href} id={href.substr(1)} {...options}>
                    <Component />
                </FormSection>
            )),
        }
    }, [sections])

    return (
        <Row>
            <Sidebar>
                <TableOfContents sections={toc} />
                {sidebarContent && sidebarContent}
            </Sidebar>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(submit)} className="max-w-form w-full">
                    <Column>
                        {renderedChildren.length > 0 && (
                            <div>
                                {renderedChildren}
                            </div>
                        )}
                        {children}
                    </Column>
                </form>
            </FormProvider>
        </Row>
    )
}

export default Form
