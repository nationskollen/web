import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        // This is safe since _document.tsx is always evaluated on the server.
        // @see {@link https://electricanimals.com/articles/next-js-dark-mode-toggle}
        // @see {@link https://nextjs.org/docs/advanced-features/custom-document#caveats}
        const setInitialTheme = `
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
        `

        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument
