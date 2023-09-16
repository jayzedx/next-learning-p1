import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Mulish-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/Mulish-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
