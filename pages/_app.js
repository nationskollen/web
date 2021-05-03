import "../styles/globals.css";
// import { Client } from "@dsp-krabby/sdk";
import { Provider } from "@dsp-krabby/sdk";

// const client = Client({
//
//   useWebSockets: false,
// });

function MyApp({ Component, pageProps }) {
  return (
    <Provider
      config={{
        development: process.env.NODE_ENV === "development",
        useWebSockets: false,
        customHostName: "nationskollen-staging.engstrand.nu",
        useHTTPS: true,
      }}
    >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
