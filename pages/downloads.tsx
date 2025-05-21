import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCardProjects from 'components/BasicCardProjects';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import QuickLinkButton from 'views/HomePage/QuickLinkButton';
import { media } from 'utils/media';
import { NextSeo } from 'next-seo';

const DOWNLOADS = [
  {
    imageUrl: '/grid-icons/akar-200.webp',
    title: 'AKAR 200',
    link: '/downloads/akar-200-downloads',
  },
  {
    imageUrl: '/grid-icons/akar-200-pro.webp',
    title: 'AKAR 200 PRO',
    link: '/downloads/akar-200-pro-downloads',
  },
  {
    imageUrl: '/grid-icons/akar-200-idex.webp',
    title: 'AKAR 200 IDEX',
    link: '/downloads/akar-200-idex-downloads',
  },
  {
    imageUrl: '/grid-icons/akar-300.webp',
    title: 'AKAR 300',
    link: '/downloads/akar-300-downloads',
  },
  {
    imageUrl: '/grid-icons/akar-300-pro.webp',
    title: 'AKAR 300 PRO',
    link: '/downloads/akar-300-pro-downloads',
  },
  {
    imageUrl: '/grid-icons/akar-600.webp',
    title: 'AKAR 600',
    link: '/downloads/akar-600-basic-downloads',
  },
  {
    imageUrl: '/grid-icons/akar-600-pro.webp',
    title: 'AKAR 600 PRO',
    link: '/downloads/akar-600-pro-downloads',
  },
  {
    imageUrl: '/grid-icons/akar-1000.webp',
    title: 'AKAR 1000',
    description: 'Coming Soon!',
  },
  {
    imageUrl: '/grid-icons/akar-1000.webp',
    title: 'AKAR 1000 PRO',
    description: 'Coming Soon!',
  },
];

export default function Downloads() {
  const metaDataDescription = `Find all essential software and the latest Mekuva Slicer here. Explore and download resources for AKAR series 3D printers.`;
  const metaDataKeywords = ['downloads', '3D printers', 'AKAR printers', 'Mekuva Slicer'];

  return (
    <>
      <NextSeo
        title="Downloads - Mekuva Technologies"
        description={metaDataDescription}
        canonical="https://www.mekuva.com/downloads"
        openGraph={{
          url: 'https://www.mekuva.com/downloads',
          title: 'Downloads - Mekuva Technologies',
          description: metaDataDescription,
          images: [
            {
              url: 'https://www.mekuva.com/images/downloads-page-image.jpg',
              width: 800,
              height: 600,
              alt: 'Downloads Page Image',
            },
          ],
          site_name: 'Mekuva Technologies',
        }}
        twitter={{
          handle: '@MekuvaTech',
          site: '@MekuvaTech',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: metaDataKeywords.join(', '),
          },
        ]}
      />
      <Page title="Downloads" description={metaDataDescription}>
        <Container id="products" style={{ marginBottom: '100px' }}>
          <Content>
            <OverTitle>Industrial 3D printers</OverTitle>
            <SectionTitle>AKAR Printers</SectionTitle>
          </Content>
          <CustomAutofitGrid>
            {DOWNLOADS.map((singleFeature, idx) => (
              <LinkWrapper
                key={singleFeature.title}
                href={singleFeature.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BasicCardProjects {...singleFeature} />
              </LinkWrapper>
            ))}
          </CustomAutofitGrid>
        </Container>
        <QuickLinkButton />
      </Page>
    </>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
  padding-bottom: 4rem;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    outline: 1.5px solid #030826;
    border-radius: 10px;
  }
`;
