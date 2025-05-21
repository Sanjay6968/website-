import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCardProjects   from 'components/BasicCardProjects';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import Page from 'components/Page';
import { media } from 'utils/media';
import { NextSeo } from 'next-seo';


const FOUNDERS = [
  {
    imageUrl: '/team/rajkumar.webp',
    title: 'Rajkumar Ukkuturi',
    description:
      'Founder',
    link: 'https://www.linkedin.com/in/rajkumarukkuturi/',
  },
  {
    imageUrl: '/team/karan.webp',
    title: 'Karan Rao',
    description:
      'Co-Founder',
    link: 'http://linkedin.com/in/Karanr',
  },
];

const DIRECTORS = [
  {
    imageUrl: '/team/rajkumar.webp',
    title: 'Rajkumar Ukkuturi',
    description:
      'Managing Director',
    link: 'https://www.linkedin.com/in/rajkumarukkuturi/',
  },
  {
    imageUrl: '/team/karan.webp',
    title: 'Karan Rao',
    description:
      'Director',
    link: 'http://linkedin.com/in/Karanr',
  },
];

const TEAM = [
  {
    imageUrl: '/team/arbaaz.webp',
    title: 'Arbaaz Ali Khan',
    description:
      'Associate Tech Engineer (Production)',
    link: 'https://in.linkedin.com/in/arbaaz-ali-khan-885680249',
  },
  {
    imageUrl: '/team/bharat.webp',
    title: 'Bharat Bolla',
    description:
      'Application Engineer',
    link: 'https://www.linkedin.com/in/bharath-mudhiraj-529582292',
  },
  {
    imageUrl: '/team/siddhartha.webp',
    title: 'Siddhartha Ajjan',
    description:
      'Associate Tech Engineer (Business)',
  },
  {
    imageUrl: '/team/siva.webp',
    title: 'Siva Chary',
    description:
      'Associate Tech Engineer (R&D)',
    link: 'https://www.linkedin.com/in/siva-chary-24a837143',
  },
  {
    imageUrl: '/team/sameer.webp',
    title: 'Shaik Sameer',
    description:
      'Assembly Engineer (Production)',
  },
  {
    imageUrl: '/team/gita.webp',
    title: 'Gita Posanagari',
    description:
      'Post Production & Admin',
  },
  // {
  //   imageUrl: '/team/prashanth.webp',
  //   title: 'Prashanth Kondala',
  //   description:
  //     'Logistics',
  // },
];

const ADVISORS = [
  {
    imageUrl: '/team/vaibhav-gupta.webp',
    title: 'Vaibhav Gupta',
    description:
      'Advisor',
  },
  {
    imageUrl: '/team/manish-amin.webp',
    title: 'Manish Amin',
    description:
      'Advisor',
    link: 'https://www.linkedin.com/in/manish-amin-a683b880/',
  },
];

export default function TeamsPage() {
  return (
    <Page title="Our Team">
      <NextSeo
        title="Our Team - Mekuva Technologies"
        description="Meet the team behind Mekuva Technologies. Learn about our founders, directors, advisors, and talented team members dedicated to revolutionizing 3D printing technology."
        canonical="https://www.mekuva.com/our-team"
        openGraph={{
          url: 'https://www.mekuva.com/our-team',
          title: 'Our Team - Mekuva Technologies',
          description: 'Meet the team behind Mekuva Technologies. Learn about our founders, directors, advisors, and talented team members dedicated to revolutionizing 3D printing technology.',
          images: [{ url: 'https://www.mekuva.com/images/team' }],
          site_name: 'Mekuva Technologies',
        }}
      />
      <Container id="founders" style={{ marginBottom: '50px'}}>
        <Content>
        <OverTitle>Founders</OverTitle>
        </Content>
        <FounderContainer>
          {FOUNDERS.map((singleFeature, idx) => (
            <LinkWrapper
              key={singleFeature.title}
              href={singleFeature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BasicCardProjects {...singleFeature} />
            </LinkWrapper>
          ))}
        </FounderContainer>
      </Container>


      <Container id="team" style={{ marginBottom: '50px'}}>
      <Content>
        <OverTitle>Team</OverTitle>
        </Content>
        <ProfileAutofitGrid>
          {TEAM.map((singleFeature, idx) => (
            <LinkWrapper
              key={singleFeature.title}
              href={singleFeature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BasicCardProjects {...singleFeature} />
            </LinkWrapper>
          ))}
        </ProfileAutofitGrid>
      </Container>

      <Container id="directors" style={{ marginBottom: '50px'}}>
      <Content>
        <OverTitle>Directors</OverTitle>
        </Content>
        <FounderContainer>
          {DIRECTORS.map((singleFeature, idx) => (
            <LinkWrapper
              key={singleFeature.title}
              href={singleFeature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BasicCardProjects {...singleFeature} />
            </LinkWrapper>
          ))}
        </FounderContainer>
      </Container>

      <Container id="advisors" style={{ marginBottom: '50px'}}>
      <Content>
        <OverTitle>Advisors</OverTitle>
        </Content>
        <FounderContainer>
          {ADVISORS.map((singleFeature, idx) => (
            <LinkWrapper
              key={singleFeature.title}
              href={singleFeature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BasicCardProjects {...singleFeature} />
            </LinkWrapper>
          ))}
        </FounderContainer>
      </Container>
    </Page>
  );
}

const FounderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;  

  ${media('<=tablet')} {
    justify-content: space-around;
  }

  ${media('<=phone')} {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 25rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 20rem;
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
  margin: 1rem;

  &:hover {
    text-decoration: none;
    outline: 1.5px solid #030826;
    border-radius: 10px;
  }
`;