import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '@nationskollen/sdk'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider
            config={{
                development: true,
                useWebSockets: false,
                customHostName: 'nationskollen-staging.engstrand.nu',
                useHTTPS: true,
            }}
        >
            <Component {...pageProps} />
        </Provider>
    )
}

export default App
