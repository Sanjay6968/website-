import NextLink from 'next/link';
import { LinkedinIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Company',
    items: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Team', href: '/team' },
      { title: 'Careers', href: '/careers' },
      { title: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    title: 'Products',
    items: [
      { title: '3D Printers', href: '/products' },
      { title: 'Services', href: '/#services' },
      { title: 'Consumables', href: 'products#consumables' },
      { title: 'Spares and Accessories', href: 'products#spares' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'Academy', href: '/academy' },
      { title: 'Calculators', href: '/calculator' },
      { title: 'Downloads', href: '/downloads' },
      { title: 'Printer Inquiry', href: '/query' },
    ],
  },
  {
    title: 'Support',
    items: [
      { title: 'Blog', href: '/blog' },
      { title: 'Contact', href: '/contact' },
      { title: 'FAQ', href: '/#faq' },
      { title: 'Help Center', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper id="footer">
      <Container>
        <AddressMapContainer>
          {/* Address box */}
          <AddressBox>
            <AddressContent>
              <h2>Our Address</h2>
              <p>Rajiv Gandhi Nagar, Prashanti Nagar,</p>
              <p>Hyderabad, Telangana, 500072</p>
              <p>India</p>
              <p>Phone: +91-8328655652</p>
            </AddressContent>
            {/* <ContactDetails>
              <div>
                <p>For machine requirements:</p>
                <p>Email: contactus@mekuva.com</p>
                <br/>
                <p>For 3D printing services:</p>
                <p>Email: sales1@mekuva.com</p>
                <p>Email: 3dPrint@mekuva.com</p>
              </div>
            </ContactDetails> */}
            <ContactDetails>
              <div>
                <p>For machine requirements:</p>
                <p>
                  <NextLink href="mailto:contactus@mekuva.com?subject=For%20machine%20requirements%3A" passHref legacyBehavior>
                    <StyledLink>Email: contactus@mekuva.com</StyledLink>
                  </NextLink>
                </p>
                <br />
                <p>For 3D printing services:</p>
                <p>
                  <NextLink href="mailto:sales1@mekuva.com?subject=For%203D%20printing%20services" passHref legacyBehavior>
                    <StyledLink>Email: sales1@mekuva.com</StyledLink>
                  </NextLink>
                </p>
                <p>
                  <NextLink href="mailto:support@mekuva.com?subject=For%203D%20printing%20services" passHref legacyBehavior>
                    <StyledLink>Email: support@mekuva.com</StyledLink>
                  </NextLink>
                </p>
              </div>
            </ContactDetails>

          </AddressBox>

          {/* Address Map */}
          <AddressMap>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5697873801!2d78.42807237412612!3d17.480293500124077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916b197c25e7%3A0x33d6db49c5737f06!2sMEKUVA%20Technologies%20(POD3D)%20%7C%20Manufacturer%20of%203D%20Printer%20in%20India%20%7C%203D%20Printing%20Services%20%7C%20CAD%20Product%20Design%20%7C%20Materials!5e0!3m2!1sen!2sin!4v1715839317338!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AddressMap>
        </AddressMapContainer>

        {/* Footer List */}
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>

        {/* Bottom Bar */}
        <BottomBar>
          <ShareBar>
            <NextLink
              href="https://twitter.com/MekuvaT"
              passHref
              target="_blank"
              legacyBehavior
            >
              <TwitterIcon size={50} round={true} />
            </NextLink>

            <NextLink
              href="https://wa.me/message/FKW2KRFHUOVRJ1"
              passHref
              target="_blank"
              legacyBehavior
            >
              <WhatsappIcon size={50} round={true} />
            </NextLink>

            <NextLink
              href="https://in.linkedin.com/company/mekuva-technologies"
              passHref
              target="_blank"
              legacyBehavior
            >
              <LinkedinIcon size={50} round={true} />
            </NextLink>
          </ShareBar>

          <Copyright>&copy; 2024 Mekuva Technologies</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref legacyBehavior>
        {title}
      </NextLink>
    </ListItemWrapper>
  );
}

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const AddressMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0a121e;
  padding: 20px;
  margin-bottom: 40px; /* Adjust as needed */

  ${media('>=tablet')} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 20px;
  flex: 1;

  ${media('>=tablet')} {
    flex-direction: row;
    margin-right: 100px;
  }
`;

const AddressContent = styled.div`
  flex: 1;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.6rem;
    color: #a6a9ad;
    margin-bottom: 10px;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  margin-top: 5.7rem;
  p {
    font-size: 1.6rem;
    color: #a6a9ad;
    margin-bottom: 10px;
  }
`;

const AddressMap = styled.div`
  flex: 1;
  width: 100%;
  height: 300px;
`;

const FooterWrapper = styled.div`
  padding-top: 8rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
