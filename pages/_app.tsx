import '@styles/globals.css'
import { isClient } from '@utils'
import { PageComponent } from '@typings'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Provider } from '@nationskollen/sdk'
import { ThemeProvider } from '@contexts/Theme'
import { appWithTranslation } from 'next-i18next'
import { NOTIFICATION_DURATION } from '@constants'

const App = ({ Component, pageProps }: AppProps) => {
    const getTemplate = (Component as PageComponent).getTemplate || ((page) => page)

    return (
        <Provider
            config={{
                environment: 'staging',
                useWebSockets: isClient(),
            }}
        >
            <>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName="w-full mx-auto max-w-notifications min-w-notifications"
                    toastOptions={{
                        duration: NOTIFICATION_DURATION,
                    }}
                />
                <ThemeProvider>{getTemplate(<Component {...pageProps}></Component>)}</ThemeProvider>
            </>
        </Provider>
    )
}

export default appWithTranslation(App)
