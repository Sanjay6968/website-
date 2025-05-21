import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';
import Container from 'components/Container';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

const questions = [
  {
    title: "What is the duration of the courses?",
    content: "The duration of our courses varies depending on the course content and level. We recommend checking the specific course details on our website for more information.",
  },
  {
    title: "Do I need any prior experience in 3D printing to enroll in the courses?",
    content: "No, our courses are designed for everyone, regardless of your age, background, or level of expertise. We start from the basics and gradually move to more advanced topics.",
  },
  {
    title: "What software and materials will be used in the courses?",
    content: "We use a variety of software and materials in our courses, which you will get to know as you progress through the course. All necessary software and materials are included in the course fee.",
  },
  {
    title: "Are the courses online or in-person?",
    content: "We offer both online and in-person sessions for our courses. You can choose the mode of delivery that suits your needs and preferences.",
  },
  {
    title: "What is the cost of the courses?",
    content: "The cost of our courses varies depending on the course content and level. For detailed pricing information and course contents, please refer to our brochure.",
  },
  {
    title: "How can I apply for an internship?",
    content: "You can apply for an internship by filling out the application form on our website. Our team will review your application and get back to you as soon as possible.",
  },
  {
    title: "What will I gain from these courses?",
    content: "By completing our courses, you will gain a solid understanding of 3D printing technology, its applications, and hands-on experience with designing and printing your own 3D models. Additionally, you will receive a certificate upon successful completion of the course. This can be beneficial for personal development, educational purposes, or career advancement in fields where 3D printing is used.",
  },
];

export default function AcademyPage() {
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
        title="Industrial 3D Printing Courses for Everyone - Mekuva Technologies"
        description="Join Mekuva 3D Printing Academy and learn everything about 3D printing. Our courses are designed for everyone, from beginners to experts. Gain hands-on experience and a certificate upon completion."
        canonical="https://www.mekuva.com/academy"
        openGraph={{
          url: 'https://www.mekuva.com/academy',
          title: 'Industrial 3D Printing Courses for Everyone - Mekuva Technologies',
          description: 'Join Mekuva 3D Printing Academy and learn everything about 3D printing. Our courses are designed for everyone, from beginners to experts. Gain hands-on experience and a certificate upon completion.',
          images: [
            {
              url: 'https://www.mekuva.com/images/academy-page-image.jpg',
              width: 800,
              height: 600,
              alt: 'Academy Page Image',
            },
          ],
          site_name: 'Mekuva Technologies',
        }}
      />
      <Page title="Industrial 3D Printing Courses for Everyone">
        <AcademyContainer>
          <RichText>
            <p>
              <strong>Learn 3D Printing with Mekuva Technologies ! </strong>
              <br />
              <br />Are you curious about how 3D printing works and what you can do with it? Do you want to explore the applications of 3D printing in various fields and industries? Do you want to gain hands-on experience and guidance from experts?<br />

              <br />If you answered yes to any of these questions, then Mekuva 3D Printing Academy is the right place for you! <br />

              <br />Mekuva 3D Printing Academy is a leading provider of 3D printing courses for everyone, regardless of your age, background, or level of expertise. <br />

              <br />We offer a range of courses that cover the basics of 3D printing, the design and modeling software, the materials and processes, and the best practices and tips.<br />

              <br />Our courses are interactive, engaging, and practical. You will learn by doing, not just by watching. You will also get feedback and support from our instructors, who are experienced professionals in the 3D printing industry.<br />

              <br />Whether you want to learn 3D printing for fun, for education, or for career advancement, we have a course that suits your needs and goals.<br /><br /><br />

              <p>
                <strong>Benefits of the 3D printing courses in our comprehensive learning program:</strong>
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/academy-icons/Self.svg" alt="self-icon" />
                <p>Learn at your own pace with online and self-study.</p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/academy-icons/Learning.svg" alt="learning-icon" />
                <p>Hands-on learning based on case studies.</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/academy-icons/Support.svg" alt="support-icon" /> 
                <p>Comprehensive support throughout each course, personal feedback and various contact options. </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/academy-icons/Certificate.svg" alt="certificate-icon" /> 
                <p>Earn a certificate from Mekuva Technologies upon successful course completion. </p>
              </div>

              <br />We also offer internships for engineers who want to upgrade their skills and knowledge in the latest 3D printing technologies. Our internships are tailored to your interests and objectives and are mentored by industrial experts who can help you bridge the gap between theory and practice. <br />

              <br />If you are interested in joining our academy, please <a href="mailto:contactus@mekuva.com?subject=Product%20%2F%20Service%20Inquiry">Apply Now!</a><br />
              <br /><br /><br />
            </p>
          </RichText>

          <Container id="faq">
            <Wrapper>
              <SectionTitle>Frequently Asked Questions</SectionTitle>
              {questions.map((question, index) => (
                <Accordion
                  key={index}
                  title={question.title}
                  isOpen={openedAccordion === question.title}
                  onTitleClick={handleAccordionClick}
                >
                  {question.content}
                </Accordion>
              ))}
            </Wrapper>
          </Container>
        </AcademyContainer>
      </Page>
    </>
  );
}

const AcademyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;

  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
