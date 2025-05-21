import styled from 'styled-components';
import Page from 'components/Page';
import { NextSeo } from 'next-seo';

export default function CareersPage() {
  const metaDataDescription = `Explore career opportunities at Mekuva Technologies. Join us in our mission to revolutionize the 3D printing industry and contribute to cutting-edge technological advancements.`;

  return (
    <>
      <NextSeo 
        title="Careers at Mekuva Technologies"
        description={metaDataDescription}
        canonical="https://www.mekuva.com/careers"
        openGraph={{
          url: 'https://www.mekuva.com/careers',
          title: 'Careers at Mekuva Technologies',
          description: metaDataDescription,
          site_name: 'Mekuva Technologies',
        }}
      />
      <Page title="Careers at Mekuva Technologies">
        <CareersContainer>
          <StyledIframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeRaEq8441RuzP2cJCFqtOHSzhxQaTE4JUee9KNVL_qaLDEjg/viewform?embedded=true">
              Loading…
          </StyledIframe>
        </CareersContainer>
      </Page>
    </>
  );
}

const CareersContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  margin: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  min-height: 100vh;
  border: none;
`;
