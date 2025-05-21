import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';
import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { margin } from 'polished';

const TABS = [
  {
    title: 'Corporate Office',
    description:
      '<p>Please take an appointment before visiting our office. Our Address: <b> First Floor, Rajiv Gandhi Nagar, Prashanti Nagar, Hyderabad, Telangana 500072 </b></p>',
    videoUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5684131344274!2d78.42808817649497!3d17.480359200117586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916b197c25e7%3A0x33d6db49c5737f06!2sMEKUVA%20Technologies%20(POD3D)%20%7C%20Manufacturer%20of%203D%20Printer%20in%20India%20%7C%203D%20Printing%20Services%20%7C%20CAD%20Product%20Design%20%7C%20Materials!5e0!3m2!1sen!2sin!4v1694510473610!5m2!1sen!2sin',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Registered Office',
    description:
      '<p>Please Visit our Corporate Office for any queries. Address: <b> Plot no 13-172, Second Floor, Behind Sifco, IDA, Balanagar, Hyderabad, Telangana 500018</b></p>',
    videoUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1902.9431569776973!2d78.43629876339122!3d17.465154605911895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI3JzU0LjYiTiA3OMKwMjYnMTYuMiJF!5e0!3m2!1sen!2sin!4v1694513231230!5m2!1sen!2sin',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const videosMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const isFirst = idx === 0;

    return (
      <VideoContainer key={singleTab.title} isActive={isActive}>
        <iframe
          src={singleTab.videoUrl}
          title={singleTab.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width={isActive ? "100%" : "0"}
          height={isActive ? "500" : "0"} // You can adjust the height as needed
        />
      </VideoContainer>
    );
  });

  const tabsMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;

    return (
      <Tab isActive={isActive} key={idx} onClick={() => handleTabClick(idx)}>
        <TabTitleContainer>
          <CircleContainer>
            <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
          </CircleContainer>
          <h4>{singleTab.title}</h4>
        </TabTitleContainer>
        <Collapse isOpen={isActive} duration={300}>
          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
          </TabContent>
        </Collapse>
      </Tab>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }`;
  
  return (
    <Page title = "Contact" description=" Get in touch with us for inquiries or any assistance you may need. We're here to help!">
      <NextSeo
        title="Contact Us - Mekuva Technologies"
        description="Get in touch with us for inquiries or any assistance you may need. We're here to help!"
        canonical="https://www.mekuva.com/contact"
        openGraph={{
          url: 'https://www.mekuva.com/contact',
          title: 'Contact Us - Mekuva Technologies',
          description: "Get in touch with us for inquiries or any assistance you may need. We're here to help!",
          images: [{ url: 'https://www.mekuva.com/images/contact.jpg', alt: 'Contact Us - Mekuva Technologies' }],
          site_name: 'Mekuva Technologies',
        }}
      />
    <FeaturesGalleryWrapper>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {videosMarkup}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
    <div style={{marginTop: '100px'}}> </div>
      <ContactContainer>
        <InformationSection />
        <FormSection />
      </ContactContainer>
    </Page>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;

const TabsContainer = styled.div`
  flex: 1;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const VideoContainer = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;
  flex: ${(p) => (p.isActive ? '2' : '0')};
  box-shadow: var(--shadow-md);

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  iframe {
    position: absolute;
    border: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: ${(p) => (p.isActive ? '100%' : '0')};
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;

