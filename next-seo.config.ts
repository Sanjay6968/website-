import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  description: 'Mekuva Technologies is a pioneering manufacturer and provider of cutting-edge industrial 3D printers, bespoke 3D printing services, advanced printing materials, and comprehensive e-commerce solutions. Based in Hyderabad, India, we specialize in additive manufacturing for industries including automotive, aerospace, healthcare, and consumer electronics. We also offer immersive 3D printing workshops for students.',
  defaultTitle: 'Mekuva Technologies',
  canonical: 'https://mekuva.com',
  additionalLinkTags: [
    {
        rel: 'icon',
        href: 'https://mekuva.com/favicon.png'
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mekuva.com',
    title: 'Mekuva Technologies',
    siteName: 'Mekuva Technologies',
    description: 'Mekuva Technologies is revolutionizing additive manufacturing with cutting-edge industrial 3D printers, bespoke 3D printing services, advanced printing materials, and comprehensive e-commerce solutions for industries such as automotive, aerospace, healthcare, and consumer electronics.',
    images: [
        {
          url: 'https://mekuva.com/favicon.png',
          width: 1330,
          height: 1330,
          alt: 'Mekuva Technologies',
        },
    ],
  },
  twitter: {
    handle: '@MekuvaT',
    site: '@MekuvaT',
    cardType: 'summary_large_image',
  },
};

export default config;
