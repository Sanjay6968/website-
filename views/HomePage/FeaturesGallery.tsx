import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { media } from 'utils/media';


const TABS = [
  {
    title: 'AKAR 600 Pro - Large Scale Industrial Printer',
    description:
      '<p>Industrial-grade 3D printer with dual extruders, 600x600x600 mm³ print volume, excelling in high-temperature materials. Boasts a robust motion system for precision.</p>',
    videoUrl: 'https://www.youtube.com/embed/53J0B4V6EqY',
    baseColor: '37,123,242',
    secondColor: '102,161,246',
  },
  {
    title: 'AKAR 300 Pro - Medium Sized Industrial Printer',
    description:
      '<p>Versatile dual extruder 3D printer with a 300x300x400 mm³ print area with AC bed heater and mesh leveling for easy printing, ideal for high-temperature materials and complex designs.</p>',
    videoUrl: 'https://www.youtube.com/embed/5dHSXtWBayI',
    baseColor: '249,174,0',
    secondColor: '254,215,0',
  },
  {
    title: 'AKAR 300XY - Desktop Printer',
    description:
      '<p>Professional desktop 3D printer with a 320x300x300 mm³ build volume, high-speed printing (up to 500 mm/s), automatic bed leveling, and a wide range of filament compatibility. Perfect for schools and small teams.</p>',
    videoUrl: 'https://www.youtube.com/embed/uo2bov6aDTg',
    baseColor: '37,123,242',
    secondColor: '102,161,246',
  },
];

export default function FeaturesGallery() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const videosMarkup = TABS.map((singleTab, idx) => {
    const isActive = singleTab.title === currentTab.title;
    const videoStyles = { display: isActive ? "block" : "none", width: '100%', height: 'auto', aspectRatio: '16 / 9' };

    return (
      <VideoContainer key={singleTab.title} isActive={isActive}>
        <LazyLoad>
          <iframe
            src={singleTab.videoUrl}
            title={singleTab.title}
            style={videoStyles}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </LazyLoad>
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

  return (
    <FeaturesGalleryWrapper>
      <Content>
        <OverTitle>Our Products in Action</OverTitle>
        <SectionTitle>Ready to See Our Solutions at Work?</SectionTitle>
      </Content>
      <GalleryWrapper>
        <TabsContainer>{tabsMarkup}</TabsContainer>
        {videosMarkup}
      </GalleryWrapper>
    </FeaturesGalleryWrapper>
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
    border: none;
    position: absolute;
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
