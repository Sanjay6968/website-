import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styled from 'styled-components';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import QuickLinkButton from 'views/HomePage/QuickLinkButton';
import 'react-image-lightbox/style.css';
import { NextSeo } from 'next-seo';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Poppins', sans-serif;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: 280px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 230px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover img {
    animation: zoomIn 1.2s forwards;
    filter: brightness(110%);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
    filter: brightness(100%);
  }

  @keyframes zoomIn {
    from {transform: scale(1);}
    to {transform: scale(1.1);}
  }
`;

const Section = styled.div`
  margin-top: 2rem;
`;

const SectionTitleStyled = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  color: #333;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: calc((100% - 300px) / 2);
    height: 2px;
    background-color: #333;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;

    &::before, &::after {
      width: calc((100% - 200px) / 2);
    }
  }
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  iframe {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
`;

const GalleryPage: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const fetchImages = () => {
      const galleryImageUrls: string[] = [];
      for (let i = 1; i <= 24; i++) {
        galleryImageUrls.push(`/images/${i}.webp`);
      }
      setGalleryImages(galleryImageUrls);
    };

    fetchImages();
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setImageLoading(true);
    setLightboxOpen(true);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <Page title="Gallery">
      <NextSeo 
        title="Gallery - Mekuva Technologies"
        description="Explore the gallery of creations, artifacts, and workshops by Mekuva Technologies. Get inspired by our innovative work."
        canonical="https://www.mekuva.com/gallery"
        openGraph={{
          url: 'https://www.mekuva.com/gallery',
          title: 'Gallery - Mekuva Technologies',
          description: 'Explore the gallery of creations, artifacts, and workshops by Mekuva Technologies. Get inspired by our innovative work.',
          images: [
            {
              url: 'https://www.mekuva.com/images/gallery',
              alt: 'Mekuva Gallery',
            },
          ],
          site_name: 'Mekuva Technologies',
        }}
      />
      <Wrapper>
        <SectionTitle>Explore Our Creations</SectionTitle>
        <VideoContainer>
          <YoutubeVideo url="https://www.youtube.com/watch?v=McoTOGb-Lzw" />
        </VideoContainer>

        <Section>
          <SectionTitleStyled>Artifacts</SectionTitleStyled>
          <GalleryContainer>
            {galleryImages.slice(16, 24).map((imageUrl, idx) => (
              <ImageContainer key={idx} onClick={() => openLightbox(idx + 16)}>
                <img src={imageUrl} alt={`Image ${idx + 1}`} onLoad={handleImageLoad} />
              </ImageContainer>
            ))}
          </GalleryContainer>
        </Section>

        <Section>
          <SectionTitleStyled>Workshops</SectionTitleStyled>
          <GalleryContainer>
            {galleryImages.slice(8, 16).map((imageUrl, idx) => (
              <ImageContainer key={idx} onClick={() => openLightbox(idx + 8)}>
                <img src={imageUrl} alt={`Image ${idx + 1}`} onLoad={handleImageLoad} />
              </ImageContainer>
            ))}
          </GalleryContainer>
        </Section>

        {lightboxOpen && (
          <Lightbox
            mainSrc={galleryImages[lightboxIndex]}
            nextSrc={galleryImages[(lightboxIndex + 1) % galleryImages.length]}
            prevSrc={galleryImages[(lightboxIndex + galleryImages.length - 1) % galleryImages.length]}
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() => setLightboxIndex((lightboxIndex + galleryImages.length - 1) % galleryImages.length)}
            onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
            imageLoadErrorMessage="Image failed to load"
            onImageLoad={handleImageLoad}
          />
        )}
      </Wrapper>
      <QuickLinkButton />
    </Page>
  );
};

export default GalleryPage;

