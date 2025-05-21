import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCardProjects   from 'components/BasicCardProjects';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import QuickLinkButton from 'views/HomePage/QuickLinkButton';
import { media } from 'utils/media';
import { NextSeo } from 'next-seo';

const FEATURES = [
  {
    imageUrl: '/grid-icons/akar-300 XY.webp',
    title: 'AKAR 300 XY',
    description:
      'The AKAR 300 XY is an industrial-grade 3D printer developed specifically for professionals, small teams, and schools. It features a big print capacity of 320x300x300 mm³ and can resume printing after filament runout. It can print with a variety of filaments, including ABS, PLA, HIPS, PVA, and Flexible Filament.',
    link: 'https://store.mekuva.com/product/akar-200',
    brochureLink: '/brochures/akar-300 XY.pdf',
  },  
  {
    imageUrl: '/grid-icons/akar-200-pro.webp',
    title: 'AKAR 200 PRO',
    description:
      'The AKAR 200 PRO is an industrial-grade 3D printer with dual extrusion that can print high-temperature materials like Polycarbonate (PC), Nylon and more. It has a print volume of 200x200x200 mm³.',
    link: 'https://store.mekuva.com/product/akar-200-pro',
    brochureLink: '/brochures/akar-200-pro.pdf',
  },
  {
    imageUrl: '/grid-icons/akar-200-idex.webp',
    title: 'AKAR 200 IDEX',
    description:
      'The AKAR 200 PRO is an industrial-grade 3D printer with independent dual extrusion (IDEX) that can print high-temperature materials. It has a print volume of 200x200x200 mm³.',
    link: 'https://store.mekuva.com/product/akar-200-idex',
      brochureLink: '/brochures/akar-200-idex.pdf',
  },
  {
    imageUrl: '/grid-icons/akar-300.webp',
    title: 'AKAR 300',
    description:
      'The AKAR 300 Single/Dual is a dual extruder 3D printer that can handle high-temperature materials such as ABS, PLA, HIPS, PVA and Flexible filaments. It has a large print volume of 300x300x400 mm³.',
    link: 'https://store.mekuva.com/product/akar-300',
    brochureLink: '/brochures/akar-300.pdf',
  },
  {
    imageUrl: '/grid-icons/akar-300-pro.webp',
    title: 'AKAR 300 PRO',
    description:
      'The AKAR 300 PRO is a dual extruder 3D printer that can print high-temperature materials like Polycarbonate (PC), Nylon and more. It has a large print volume of 300x300x400 mm³.',
    link: 'https://store.mekuva.com/product/akar-300-pro',  
    brochureLink: '/brochures/akar-300-pro.pdf',
  },
  {
    imageUrl: '/grid-icons/akar-600.webp',
    title: 'AKAR 600',
    description:
      'The AKAR 600 is a single/dual extruder 3D printer with a huge print volume of 600x600x600 mm³. It has an industrial-grade motion system.',
    link: 'https://store.mekuva.com/product/akar-600-basic',  
    brochureLink: '/brochures/akar-600.pdf',
  },
  {
    imageUrl: '/grid-icons/akar-600-pro.webp',
    title: 'AKAR 600 PRO',
    description:
      'The AKAR 600 PRO is a dual extruder 3D printer that can print high-temperature materials like Polycarbonate (PC) and Nylon. It has a huge print volume of 600x600x600 mm³. It has an industrial-grade motion system.',
    link: 'https://store.mekuva.com/product/akar-600-pro',  
    brochureLink: '/brochures/akar-600-pro.pdf',
  },
  {
    imageUrl: '/grid-icons/akar-1000.webp',
    title: 'AKAR 1000',
    brochureLink: '/brochures/akar-1000.pdf',
    description:
      ' Modular 3D Printer: IDEX Head, Laser Engraving & Large Bed Size ',
  },
  {
    imageUrl: '/grid-icons/akar-1000-pro.webp',
    title: 'AKAR 1000 PRO',
    brochureLink: '/brochures/akar-1000-pro.pdf',
    description:
      ' Modular 3D Printer: IDEX Head, Laser Engraving & Large Bed Size ',
  },
];

const FILAMENTS = [
  {
    imageUrl: '/grid-icons/solidspace-petg.webp',
    title: 'Solidspace PETG 3D Printing Filament',
    description:
      'This top-grade 3D printing material offers excellent bed adhesion and strong layer cohesion. It comes in 1.75/2.85mm diameter filaments with a 3% dimensional accuracy, vacuum-sealed with desiccant and boxed. The recommended extrusion/nozzle temperature is 230°C - 250°C, and heated bed is 60°C -70°C. Available in multiple colors.',
  },
  {
    imageUrl: '/grid-icons/solidspace-abs.webp',
    title: 'Solidspace ABS 3D Printing Filament',
    description:
      "This high-grade 3D printing material adheres well to the print bed and resists warping or cracking under controlled conditions. It's available in 1.75/2.85mm diameter filaments with a 3% dimensional accuracy, vacuum-sealed with desiccant and boxed. The recommended extrusion/nozzle temperature is 225°C - 255°C, and heated bed is 85°C -110°C. Available in multiple colors.",
  },
  {
    imageUrl: '/grid-icons/solidspace-pla.webp',
    title: 'Solidspace PLA 3D Printing Filament',
    description:
      "Solidspace PLA 3D printing material, derived from Natureworks Ingeo, offers filaments in 1.75/2.85mm diameter with a 3% dimensional accuracy. It's vacuum-sealed with desiccant and boxed. The recommended extrusion/nozzle temperature is 190°C - 210°C, and heated bed is 50°C -60°C. It comes in various colors, with custom colors available for orders over 20kg.",
  },
];

const SPARES = [
  {
    imageUrl: '/grid-icons/8mm-bore.webp',
    title: '20 Teeth GT2 Timing Pulley 8mm Bore For 6mm Belt For 3D Printer RepRap',
    description:
      '8mm bore, 6mm width belt, 20 tooth timing pulley',
  },
  {
    imageUrl: '/grid-icons/5mm-bore.webp',
    title: '20 Teeth GT2 Timing Pulley 5mm Bore For 6mm Belt For 3D Printer RepRap',
    description:
      "5mm bore, 6mm width belt, 20 tooth timing pulley",
  },
  {
    imageUrl: '/grid-icons/24v-heater-cartridge.webp',
    title: '24V Volt Heater Cartridge for 3D Printer',
    description:
      "24V, 40W, Compatible with all Creality 3D machines like Ender 3, CR10 series and many RepRap machines ",
  },
  {
    imageUrl: '/grid-icons/520x520mm-silicon-heated-bed.webp',
    title: '550x550mm Silicon Heated Bed for 3D Printer',
    description:
      "550 x 550 mm size, 1000W, 240V AC supply, 2-meter wire length, with a pocket for the sensor, without adhesive (can be sticked to surface with any silicone sealant available in the hardware store), Max Temperature 150°C",
  },
];

export default function ProductsPage() {
  return (
    <Page title="Products" description=" Explore Our Products">
      <NextSeo 
        title="Products - Mekuva Technologies"
        description="Explore a wide range of industrial 3D printers, filaments, and spare parts at Mekuva Technologies. Find the perfect solution for your 3D printing needs, Akar 300, Akar 1000, Akar 1000 Pro, Akar 600 Pro, Akar 600, filaments, PLA, Nylon, PETG, ABS, pulley, Accessories"
        canonical="https://www.mekuva.com/products"
        openGraph={{
          url: 'https://www.mekuva.com/products',
          title: 'Products - Mekuva Technologies',
          description: 'Explore a wide range of industrial 3D printers, filaments, and spare parts at Mekuva Technologies. Find the perfect solution for your 3D printing needs.',
          images: [
            {
              url: 'https://www.mekuva.com/images/products',
              alt: 'Mekuva Products',
            },
          ],
          site_name: 'Mekuva Technologies',
        }}
      />  
      <Container id="products" style={{ marginBottom: '100px'}}>
        <Content>
          <OverTitle>Industrial 3D printers</OverTitle>
          <SectionTitle>AKAR Printers</SectionTitle>
        </Content>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <LinkWrapper
              key={singleFeature.title}
              href={singleFeature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BasicCardProjects {...singleFeature} />
            </LinkWrapper>
          ))}
        </CustomAutofitGrid>
      </Container>
      
      <Container id="consumables" style={{ marginBottom: '100px'}}>
        <Content>
          <OverTitle>Filaments and Resins</OverTitle>
          <SectionTitle>Printer Consumables</SectionTitle>
        </Content>
        <CustomAutofitGrid>
          {FILAMENTS.map((singleFeature, idx) => (
            <LinkWrapper
              key={singleFeature.title}
              // href={singleFeature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BasicCardProjects {...singleFeature} />
            </LinkWrapper>
          ))}
        </CustomAutofitGrid>
      </Container>

      <Container id="spares" style={{ marginBottom: '100px'}}>
        <Content>
          <OverTitle>Spare Parts</OverTitle>
          <SectionTitle>Parts and Accessories</SectionTitle>
        </Content>
        <CustomAutofitGrid>
          {SPARES.map((singleFeature, idx) => (
            <LinkWrapper
              key={singleFeature.title}
              // href={singleFeature.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BasicCardProjects {...singleFeature} />
            </LinkWrapper>
          ))}
        </CustomAutofitGrid>
      </Container>
      <QuickLinkButton />
    </Page>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
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

  &:hover {
    text-decoration: none;
    outline: 1.5px solid #030826;
    border-radius: 10px;
  }
`;