import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";
import "./globals.scss";

const MyApp = ({ Component, pageProps }: {Component: React.ElementType, pageProps: any}) => (
  <Layout>
    <Head>
        
    </Head>
    <main>
      <Component {...pageProps}/>
    </main>
  </Layout>
);

export default MyApp;