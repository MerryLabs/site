import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/reset-css@4.0.1/reset.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
