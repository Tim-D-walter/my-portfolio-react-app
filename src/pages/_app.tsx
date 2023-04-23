import "../styles/globals.css";
import type {AppProps} from "next/app";
import Layout from "@/components/layout/Layout";
import 'src/styles/honeycomb.scss'
import 'src/styles/desk-animation.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
