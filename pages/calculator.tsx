import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Page from 'components/Page';
import BatteryBackupCalculator from './calculators/BatteryBackup';
import RotationDistanceCalculator from './calculators/RotationDistance';
import StepsPerMmBeltDrivenCalculator from './calculators/StepsPerMmBeltDriven';
import StepsPerMmLeadScrewDrivenCalculator from './calculators/StepsPerMmLeadScrewDriven';

const CalculatorSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const DescriptionContainer = styled.div`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;
`;

const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #eaeaea;
  padding: 20px;
  border-radius: 5px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CalculatorDescription = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5em; /* Increased font size for better readability */
  }
  ul li {
    font-size: 1.2em; /* Increased font size for list items */
  }
`;

const CalculatorContent = styled.div`
  flex: 2;
`;

export default function CalculatorPage() {
  return (
    <>
      <NextSeo
        title="Calculators"
        description="Various different calculators to provide help in predicting the load and power consumption of devices at household or at an industry, Calculator, Stepper motor, Battery, Battery Backup, UPS, Klipper, Rotation Distance, Steps per milimeter, mm, Leadscrew drive, Belt drive, Time, Load, Energy Solution, Tool, Accurate, Mekuva, 3D printer, Performance, Efficient"
        canonical="https://www.mekuva.com/calculator"
        openGraph={{
          url: 'https://www.mekuva.com/calculator',
          title: 'Calculators',
          description: 'Calculator, Stepper motor, Battery, Battery Backup, UPS, Klipper, Rotation Distance, Steps per milimeter, mm, Leadscrew drive, Belt drive, Time, Load, Energy Solution, Tool, Accurate, Mekuva, 3D printer, Performance, Efficient',
          images: [
            {
              url: 'https://www.mekuva.com/images/calculator-page-image.jpg',
              width: 800,
              height: 600,
              alt: 'Calculator Page Image',
            },
          ],
          site_name: 'Mekuva',
        }}
      />
      <Page title="Tools & Calculators">
        <CalculatorSection>
          <DescriptionContainer>
            <h1>Battery Backup Calculator</h1>
            <p>This calculator helps you determine the backup time provided by a battery for a given load.</p>
          </DescriptionContainer>
          <CalculatorContainer>
            <CalculatorDescription>
            <p>
                The Battery Backup Calculator is a crucial tool for estimating backup time provided by battery systems. It assists users in determining how long a battery setup can sustain a given load before needing recharging or replacement.
              </p>
              <br></br>
              <p>
                The calculator requires the following inputs:
              </p>
              <ul>
                <li>Battery Capacity (AH)</li>
                <li>Battery Voltage (V)</li>
                <li>Number of Batteries</li>
                <li>Total Load (Watts)</li>
              </ul>
              <p>
                Useful for individuals and businesses reliant on battery backups, this tool aids in optimizing energy storage solutions for uninterrupted power supply during outages or off-grid scenarios. 
              </p>
              
            </CalculatorDescription>
            <CalculatorContent>
              <BatteryBackupCalculator />
            </CalculatorContent>
          </CalculatorContainer>
        </CalculatorSection>
        <CalculatorSection>
          <DescriptionContainer>
            <h1>Steps per mm Belt Driven Calculator</h1>
            <p>Calculate the steps per millimeter for a belt-driven system.</p>
          </DescriptionContainer>
          <CalculatorContainer>
            <CalculatorDescription>
            <p>
              The Steps per Millimeter Belt Driven Calculator is an essential tool for determining the number of steps required for precise movement in a belt-driven system. This calculator is particularly useful for engineers, hobbyists, and professionals involved in designing and configuring CNC machines, 3D printers, and other machinery where precise movement is crucial.
            </p>
            <br></br>
            <p>
              The calculator requires the following inputs:
            </p>
            <ul>
              <li>Motor Step Angle</li>
              <li>Driver Microstepping</li>
              <li>Belt Pitch</li>
              <li>Belt Presets</li>
              <li>Pulley Tooth Count</li>
            </ul>
            <p>
              Upon providing these inputs, the calculator computes the steps per millimeter, enabling users to achieve accurate positioning and motion control in their belt-driven setups. By accurately calculating steps per millimeter, users can optimize the performance and efficiency of their belt-driven systems, ensuring precise and reliable operation in various applications.
            </p>

            </CalculatorDescription>
            <CalculatorContent>
              <StepsPerMmBeltDrivenCalculator />
            </CalculatorContent>
          </CalculatorContainer>
        </CalculatorSection>
        <CalculatorSection>
          <DescriptionContainer>
            <h1>Steps per mm Lead Screw Driven Calculator</h1>
            <p>Calculate the steps per millimeter for a lead screw-driven system.</p>
          </DescriptionContainer>
          <CalculatorContainer>
            <CalculatorDescription>
            <p>
              The Steps per Millimeter Lead Screw Driven Calculator is a vital tool for determining the number of steps necessary for precise movement in a lead screw-driven system. This calculator is particularly beneficial for engineers, hobbyists, and professionals involved in designing and configuring CNC machines, 3D printers, and other machinery where precise movement is essential.
            </p>
            <br></br>
            <p>
            The calculator requires the following inputs:
            </p>
            <ul>
              <li>Motor Step Angle</li>
              <li>Driver Microstepping</li>
              <li>Lead Screw Pitch (measured in millimeters per revolution)</li>
              <li>Belt Presets</li>
              <li>Gear Ratio</li>
            </ul>
            <p>
              By providing these inputs, the calculator computes the steps per millimeter, allowing users to achieve accurate positioning and motion control in their lead screw-driven setups. By accurately calculating steps per millimeter, users can optimize the performance and efficiency of their lead screw-driven systems, ensuring precise and reliable operation in various applications.
            </p>
            </CalculatorDescription>
            <CalculatorContent>
              <StepsPerMmLeadScrewDrivenCalculator />
            </CalculatorContent>
          </CalculatorContainer>
        </CalculatorSection>
        <CalculatorSection>
          <DescriptionContainer>
            <h1>Rotation Distance Calculator</h1>
            <p>Determine the rotation distance for various mechanical setups.</p>
          </DescriptionContainer>
          <CalculatorContainer>
            <CalculatorDescription>
            <p>
              The Rotation Distance Calculator is a valuable tool for determining the rotation distance based on specific parameters of a mechanical system. This calculator is particularly useful for engineers, hobbyists, and professionals involved in designing and configuring stepper motor-driven systems, CNC machines, robotic arms, and other mechanical assemblies where accurate movement control is essential.
            </p>
            <br></br>
            <p>
            The calculator requires the following inputs:
            </p>
            <ul>
              <li>Number of Full Steps per Rotation</li>
              <li>Driver Microstepping Setting</li>
              <li>Desired Step Distance in Millimeters</li>
            </ul>
            <p>
              Upon providing these inputs, the calculator computes the rotation distance, providing users with a precise measurement to facilitate mechanical setup and operation. By accurately estimating rotation distance, users can optimize the performance and efficiency of their mechanical systems, ensuring precise motion control and alignment.
            </p>

            </CalculatorDescription>
            <CalculatorContent>
              <RotationDistanceCalculator />
            </CalculatorContent>
          </CalculatorContainer>
        </CalculatorSection>
      </Page>
    </>
  );
}
