// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kurumsal Tedarikçi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Kurumsal Tedarikçi - E-Dönüşüm, IT Danışmanlığı, Entegrasyon ve E-imza Hizmetleri"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
