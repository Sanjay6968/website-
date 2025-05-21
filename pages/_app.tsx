import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { TrackingHeadScript } from "@phntms/next-gtm";
import { AppProps } from 'next/dist/shared/lib/router/router';
import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import WaveCta from 'components/WaveCta';
import { NavItems } from 'types';
import SEO from '../next-seo.config';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const navItems: NavItems = [
  { title: 'Products', href: '/products' },
  { title: 'Services', href: '/#services' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' }, 
  { title: 'STORE', href: 'https://store.mekuva.com', outlined: true },
];

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta name="keywords" content="India, Telangana, Andhra Pradesh, Make in India, 3D printing, industrial 3D printers, 3D printing services, advanced printing materials, additive manufacturing, Hyderabad, automotive, aerospace, healthcare, consumer electronics, 3D printing workshops, 3D printing e-commerce, filaments, resins, powders, nozzles, build plates" />
        <meta name="author" content="Mekuva Technologies" />
      </Head>
      <main className={poppins.className}>
        <ColorModeScript />
        <GlobalStyle />
        <TrackingHeadScript id={GA_TRACKING_ID} isGTM={true} />
        <Providers>
          <Navbar items={navItems} />
          <TinaEditProvider
            editMode={
              <TinaCMS
                query={pageProps.query}
                variables={pageProps.variables}
                data={pageProps.data}
                isLocalClient={!process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
                branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
                clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
                {...pageProps}
              >
                {(livePageProps: any) => <Component {...livePageProps} />}
              </TinaCMS>
            }
          >
            <Component {...pageProps} />
          </TinaEditProvider>
          <WaveCta />
          <Footer />
        </Providers>
      </main>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
  );
}

export default MyApp;
