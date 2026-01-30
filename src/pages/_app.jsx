import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Head from "next/head";
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <GoogleTagManager gtmId="GTM-PQ555WSG" /> */}
    <GoogleAnalytics gaId="G-9NWHB6V8CH" />
    <Head>
        {/* Google Ads gtag.js script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16722071369"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-16722071369');
              gtag('config', 'AW-16722071369/UzMDCMnKq-YZEMme2qU-', {
                'phone_conversion_number': '+441634565540'
              });
            `,
          }}
        />

      </Head>
    <main className={`${poppins.className}`}>
    <Component {...pageProps} />
  </main>
  </>
);
}