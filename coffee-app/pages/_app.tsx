//entry point
import { AppProps } from "next/app";
import "@/styles/globals.css";
import styles from "@/styles/home.module.css"; // Import CSS Module
import Footer from "@/components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      {/* optional */}
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
      </Head> */}
      <div>Hello From Entry Point (_app.tsx)</div>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
