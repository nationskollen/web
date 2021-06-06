import '@styles/globals.css'
import { isClient } from '@utils'
import type { AppProps } from 'next/app'
import { Provider } from '@nationskollen/sdk'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider
            config={{
                development: true,
                useWebSockets: isClient(),
                customHostName: 'nationskollen-staging.engstrand.nu',
                useHTTPS: true,
            }}
        >
            <Component {...pageProps} />
        </Provider>
    )
}

export default App
