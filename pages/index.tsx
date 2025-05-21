import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import FaqSection from 'views/HomePage/FaqSection';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Testimonials from 'views/HomePage/Testimonials';
import { NextSeo } from 'next-seo';

export default function Homepage() {
  const siteName = EnvVars.SITE_NAME;
  const pageTitle = "Index";
  const description = "Mekuva Technologies, based in Hyderabad, Telangana, India, is a premier manufacturer and provider of state-of-the-art industrial 3D printers, customized 3D printing services, advanced printing materials, and comprehensive e-commerce solutions and store. We are also an distributer of Quality products in colaboration with world-class organizations. Specializing in additive manufacturing for automotive, aerospace, healthcare, and consumer electronics industries, we pride ourselves on offering high-quality, made-in-India products that are shipped all over India. Additionally, we provide immersive 3D printing workshops for students, fostering innovation and learning.";
  const description_1 = "Mekuva Technologies, Hyderabad, Telangana, India, Manufacturer, industrial, printer, printers,3D Printers, 3D Printing, Services, Printing Materials, E-commerce, Store, Specializing, additive manufacturing, automotive, aerospace, healthcare, consumer electronics industries, high-quality, Made-in-India products, shipping all over India, 3D printing workshops, students, Innovation, Learning.";
  const url = "https://mekuva.com/index";

  return (
    <>
    <NextSeo 
        title={`${pageTitle} - ${siteName}`}
        description={description_1}
        canonical={url}
        openGraph={{
          url: url,
          title: `${pageTitle} - ${siteName}`,
          description: description_1,
          site_name: siteName,
        }}
      />
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={description} />
        {/* Add more meta tags as needed */}
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/printers.svg" title="3D Printers" overTitle="Products">
            <p>
              We build Industrial 3D Printers for high-tech manufacturing.{' '}
              <Link href="/gallery">Explore our gallery to witness our printers in action.</Link> Mekuva is dedicated to offering cutting-edge 3D printers, paired with exceptional customer support, 
              with the goal of making 3D printing technology accessible to creators, households, and educational institutions. <Link href="/brochure.pdf">Click here to view our brochure.</Link>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/services.png" title="3D Printing Services" overTitle="Services" reversed>
            <p>
            Discover our top-notch 3D Printing Services with a diverse range of materials, including PLA, ABS, ASA, Carbon Fiber, Wood, Nylon, PC, and more. We also excel in SLA/DLP resin printing, 
            offering Standard, Flexible, Tough, and Castable Resins. Bring your ideas to life with precision and excellence!
            </p>
            <ul>
              <li>Step 1 : Upload your CAD Model</li>
              <li>Step 2 : Finalize Order</li>
              <li>Step 3 : We Print the Model</li>
              <li>Step 4 : Shipping & Delivery</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <FaqSection />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
