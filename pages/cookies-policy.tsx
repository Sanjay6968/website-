import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import { NextSeo } from 'next-seo';

export default function ContactPage() {
  return (
    <Page title="Cookies Policy">
      <NextSeo
        title="Cookies Policy - Mekuva Technologies"
        description="Learn about how Mekuva Technologies uses cookies and similar technologies on its website to enhance user experience and improve website performance."
        canonical="https://www.mekuva.com/cookies-policy"
      />
      <CookiesPolicyContainer>
        <RichText>
          <p>
          Effective Date: <strong>20th September 2023</strong><br /> <br />
          <strong>Welcome to Mekuva Technologies ! </strong>
          <br />
          <br /> 
We are dedicated to protecting your privacy while offering top-notch 3D printers, services, and accessories. This Cookies Policy explains how we utilize cookies and similar technologies on our website, in conjunction with our Privacy Policy. <br /><br />

<strong>Cookies and Tracking Technologies</strong><br /> <br />

We employ cookies and tracking technologies on our website. These technologies are small data files that are placed on your device when you visit our site. They help us analyze website traffic, improve your experience, and provide personalized content.<br /> <br />

<strong>Types of Cookies</strong>
<li>
    <ul>Essential Cookies: Necessary for the proper functioning of the website. These cannot be disabled.</ul>

    <ul>Analytical/Performance Cookies: Used to collect information about your use of the website, such as pages visited and error messages. We use Google Analytics for this purpose.</ul>

    <ul>Functionality Cookies: These enhance your experience by remembering your preferences (e.g., language) on the website.</ul>

    <ul>Marketing Cookies: Used to deliver relevant ads to you based on your interests and online behavior.</ul>
</li>
<strong>Managing Your Cookie Preferences</strong><br /> <br />

You can manage your cookie preferences through your browser settings. Please note that disabling certain cookies may impact the functionality of our website.<br /> <br />

<strong>Why We Use Cookies</strong><br /> <br />

We use cookies for the following purposes:
<li>
  
    <ul>Website Analytics: To understand how visitors use our site and improve its performance.</ul>
    <ul>Personalization: To provide a tailored experience and remember your preferences.</ul>
    <ul>Marketing: To deliver relevant content and offers.</ul>
    <ul>Security: To enhance the security of our website.</ul>
</li>
<br /> <br />
<strong>Third-Party Cookies</strong>

Our website uses Google Analytics and may contain links to third-party websites. Please review the privacy policies of these third parties, as we do not control their practices.<br /> <br />

<strong>Cookie Duration</strong><br /> <br />

The duration of cookies varies. Some are session cookies that expire when you close your browser, while others may persist for a longer period.<br /> <br />

<strong>Policy Updates</strong><br /> <br />

We may update this Cookies Policy to reflect changes in our practices. Any updates will be posted on this page. <br /> <br />

<strong>Contact Information</strong><br /> <br />

If you have any questions or concerns about our use of cookies or your privacy, please contact us at contactus@mekuva.com. <br /> <br />

By using our website, you consent to the terms outlined in this Cookies Policy and our Privacy Policy. Thank you for choosing Mekuva Technologies for your 3D printing needs. <br /> <br />
          </p>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
