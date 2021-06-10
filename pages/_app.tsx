import '@styles/globals.css'
import { isClient } from '@utils'
import { PageComponent } from '@types'
import type { AppProps } from 'next/app'
import { Provider } from '@nationskollen/sdk'
import { ThemeProvider } from '@contexts/Theme'

const App = ({ Component, pageProps }: AppProps) => {
    const getTemplate = (Component as PageComponent).getTemplate || ((page) => page)

    return (
        <Provider
            config={{
                development: true,
                useWebSockets: isClient(),
                customHostName: 'nationskollen-staging.engstrand.nu',
                useHTTPS: true,
            }}
        >
            <ThemeProvider>{getTemplate(<Component {...pageProps}></Component>)}</ThemeProvider>
        </Provider>
    )
}

export default App
