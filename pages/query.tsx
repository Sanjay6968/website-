import styled from 'styled-components';
import Page from 'components/Page';
import { NextSeo } from 'next-seo';

export default function QueryPage() {
  const metaDataDescription = `Request A Quote For Our 3D Printers at Mekuva Technologies`;

  return (
    <>
      <NextSeo 
        title="Request A Quote For Our 3D Printers"
        description={metaDataDescription}
        canonical="https://www.mekuva.com/query"
        openGraph={{
          url: 'https://www.mekuva.com/query',
          title: 'Quotes For Our 3D Printers',
          description: metaDataDescription,
          site_name: 'Mekuva Technologies',
        }}
      />
      <Page title="Request A Quote For Our 3D Printers">
        <CareersContainer>
          <StyledIframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd9GeCFhQxQ933qf-lS_sNUtZqYvylfX4sZhGyusQHt4I6Aug/viewform?embedded=true">
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
