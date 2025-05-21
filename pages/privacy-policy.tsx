import Head from 'next/head';
import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { EnvVars } from 'env';
import { NextSeo } from 'next-seo';

export default function ContactPage() {
  const siteName = EnvVars.SITE_NAME;
  const pageTitle = "Privacy Policy";
  const description = "Learn about how Mekuva Technologies protects your privacy with our Privacy Policy.";
  const url = "https://mekuva.com/privacy-policy";
  return (
    <>
      <NextSeo 
        title={`${pageTitle} - ${siteName}`}
        description={description}
        canonical={url}
        openGraph={{
          url: url,
          title: `${pageTitle} - ${siteName}`,
          description: description,
          site_name: siteName,
        }}
      />
      <Head>
      <title>{pageTitle} - {siteName}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${pageTitle} - ${siteName}`} />
      <meta property="og:description" content={description} />
      {/* Add more meta tags as needed */}
    </Head>
    <Page title="Privacy Policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
          <strong>Welcome to Mekuva Technologies ! </strong>
          <br />
          <br /> We are committed to safeguarding your privacy while providing exceptional 3D printers, services, and accessories. This Privacy Policy explains how we collect, use, and protect your information. <br /> <br /> 

 
<br /><strong>Information Collected</strong> <br /> <br />

We may collect personal and non-personal information, including but not limited to names, email addresses, shipping addresses, and order details. We also use cookies and similar technologies for website analytics and improvements.  <br /> <br />

 
<br /><strong>How information is Collected</strong> <br /> <br />

We may collect personal and non-personal information, including but not limited to names, email addresses, shipping addresses, and order details. We also use cookies and similar technologies for website analytics and improvements. <br /> <br />

 
<br /><strong>Cookies and Tracking</strong><br /><br />

Our website uses cookies for analytics and personalization. You can manage your cookie preferences in your browser settings.  <br /> <br />

 
<br /><strong>Why Information is Collected</strong><br /><br />

We collect data to fulfill orders, provide customer support, improve our products and services and for marketing purposes.  <br /> <br />

 
<br /><strong>Use of Information:</strong><br /><br />

We use collected data to process orders, communicate with you, personalize your experience, and share updates on our products and promotions. We may share data with trusted third parties for order fulfillment and analytics.  <br /> <br />

 
<br /><strong>Who we share your data with</strong><br /><br />

We may share anonymized data with our analytics partner for insights. If you request a password reset, your IP address will be included in the reset email.  <br /> <br />

 
<br /><strong>How long we retain your data</strong><br /><br />

If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.  <br /> <br />

For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.  <br /> <br />

 
<br /><strong>What rights you have over your data</strong><br /><br />

If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes. Contact us at contactus@mekuva.com to exercise these rights.  <br /> <br />

 
<br /><strong>Data Security</strong><br /><br />

We take data security seriously and use industry-standard measures to protect your information. We use HTTPS and TLS for all our webpages.  <br /> <br />

 
<br /><strong>Where your data is sent</strong><br /><br />

Visitor comments may be checked through an automated spam detection service.  <br /> <br />

 
<br /><strong>Third-Party Links</strong><br /><br />

Our website may contain links to third-party websites. Please review their privacy policies as we are not responsible for their practices.  <br /> <br />

 
<br /><strong>Age Consent</strong><br /><br />

By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.  <br /> <br />

 
<br /><strong>Policy Updates</strong><br /><br />

We may update this privacy policy as our business evolves. Any changes will be posted on this page.  <br /> <br />

 
<br /><strong>Contact Information</strong><br /><br />


If you have questions or concerns regarding your privacy, please contact us at contactus@mekuva.com By using our website, you consent to the terms outlined in this Privacy Policy. Thank you for
choosing Mekuva Technologies for your 3D printing needs.  <br /> <br />
          </p>
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
    </>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
