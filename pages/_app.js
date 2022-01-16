import "../styles/globals.css";
// import { Provider } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
// ({ Component, pageProps }
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // <Provider session={pageProps.session}>
    //   <Component {...pageProps} />
    // </Provider>
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;
