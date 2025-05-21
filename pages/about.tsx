import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { NextSeo } from 'next-seo';

export default function ContactPage() {
  return (
    <>
      <NextSeo 
        title="About Mekuva Technologies - 3D Printing and Manufacturing Solutions"
        description="Learn about Mekuva Technologies, a leading provider of industrial 3D printing machinery and services in India. Discover our commitment to innovation, quality, and customer satisfaction."
        canonical="https://www.mekuva.com/contact"
        openGraph={{
          url: 'https://www.mekuva.com/contact',
          title: 'About Mekuva Technologies - 3D Printing and Manufacturing Solutions',
          description: 'Learn about Mekuva Technologies, a leading provider of industrial 3D printing machinery and services in India. Discover our commitment to innovation, quality, and customer satisfaction.',
          images: [
            {
              url: 'https://www.mekuva.com/images/contact-page-image.jpg',
              width: 800,
              height: 600,
              alt: 'Contact Page Image',
            },
          ],
          site_name: 'Mekuva Technologies',
        }}
      />
      <Page title="About Mekuva Technologies">
        <AboutContainer>
          <RichText>
            <p>
              <strong>Welcome to Mekuva Technologies ! </strong>
              <br />
              <br /> We founded this company with the purpose of manufacturing industrial and affordable 3D printing machinery in India for manufacturing and product development companies. Finding new applications for 3D printing technology. Integrate AI to the 3D printing technology to enable effective utilization of resources and making manufacturing, relatively cleaner and safer compared to traditional manufacturing techniques.  <br />

              <br />Mekuva, we are a prototyping company that specialized in manufacturing professional 3D printers, providing 3D printing services, Industrial design, and various conventional manufacturing services. We have worked with entrepreneurs, startups, and industry giants. We believe that commitment is the most important thing to value in business. Whether you are a small company or a large one, you will get the same excellent high-level customer support from our side.  <br /> 

              <br />Currently, We are making huge efforts in the research and development of FDM/FFF, SLA, and DLP printers, finding new applications for 3D printing technology and build products that people rely on in their daily lives. <br />

              <br />Introducing ourselves, We are a team of three members who are passionate about 3D printing and various manufacturing technologies. We are expertise in 3D printing, Product Design, and various conventional manufacturing technologies like CNC machining, sheet metal operations, injection moulding, wire cut, finishing. <br /> 

              <br />We strongly believe that the secret to success is to provide reliable service on time, every time. As a startup, we have learned the importance of Commitment and to provide quality products on time. <br /> 
              
              <br /><a href="mailto:contactus@mekuva.com?subject=Product%20%2F%20Service%20Inquiry">Email us</a> today to bring your ideas to form.<br /> <br />
            </p>
          </RichText>
        </AboutContainer>
      </Page>
    </>
  );
}

const AboutContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
