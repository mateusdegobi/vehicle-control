 import "../styles/globals.css";
 import type { AppProps } from "next/app";
 const user = "kim3dis";

 function MyApp({ Component, pageProps }: AppProps) {
   return <Component user={user} {...pageProps} />;
 }

 export default MyApp;
