import '../styles/globals.css'
import { Provider } from '@nationskollen/sdk'

function MyApp({ Component, pageProps }) {
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

export default MyApp
