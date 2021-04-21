import "../styles/globals.css";
import { Client } from "@dsp-krabby/sdk";
import { Provider } from "@dsp-krabby/sdk/lib/react";

const client = Client({
  development: process.env.NODE_ENV === "development",
  useWebSockets: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider client={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
