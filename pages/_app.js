import '../styles/globals.css'
import { Provider } from '@dsp-krabby/sdk'

function MyApp({ Component, pageProps }) {
  return (
    <Provider config={{ development: process.env.NODE_ENV === 'development', useWebSockets: false }}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
