import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import AccordionDL from 'components/AccordionDL';
import SectionTitle from 'components/SectionTitle';
import Container from 'components/Container';
import Page from 'components/Page';
import { useState } from 'react';

export default function AKAR200PRODownloads() {
  const [openedAccordion, setOpenedAccordion] = useState<string | null>(null);

  const handleAccordionClick = (title: string) => {
    if (openedAccordion === title) {
      setOpenedAccordion(null);
    } else {
      setOpenedAccordion(title);
    }
  };

  return (
    <>
      <NextSeo
        title="AKAR 200 PRO | Downloads"
        description="Download the Mekuva Slicer and other resources for the AKAR 200 PRO 3D printer."
        openGraph={{
          title: "AKAR 200 PRO | Downloads",
          description: "Download the Mekuva Slicer and other resources for the AKAR 200 PRO 3D printer.",
          url: "https://mekuva.com/akar200pro-downloads",
          images: [
            {
              url: "https://mekuva.com/images/akar200pro-downloads.jpg",
              width: 1200,
              height: 630,
              alt: "AKAR 200 PRO | Downloads",
            },
          ],
        }}
      />
      <Page title="AKAR 200 PRO | Downloads">
        <Container>
          <Wrapper>
            {/* <SectionTitle>Slicing Utility</SectionTitle> */}
            <AccordionDL
              title={<span>Mekuva Slicer <a target="_blank" href="https://drive.google.com/uc?export=download&id=1kROVuGCyvGIRUjAwqSkqN-yngjJ40626" download style={{marginLeft: '10px'}}>Download</a></span>}
              releaseNotes="Release notes"
              isOpen={openedAccordion === "Mekuva Slicer"}
              onTitleClick={() => handleAccordionClick("Mekuva Slicer")}
            >
              <p>
                This is the initial release of the Mekuva Slicer, if you experience any bugs, please file a bug report at contactus@mekuva.com
              </p>
              <ul>
                {/* Optionally keep or remove the download link here since it's now in the title */}
                <li>Initial release</li>
                {/* Add more download links as needed */}
              </ul>
            </AccordionDL>
          </Wrapper>
        </Container>
      </Page>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;

  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
