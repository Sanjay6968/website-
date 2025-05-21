import { NextSeo } from 'next-seo';
import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import { microsteppingOptions, motorStepAngleOptions } from './options';

export default function RotationDistanceCalculator() {
  const [MotorStepAngle, setMotorStepAngle] = useState<number | null>(null);
  const [DriverMicrostepping, setDriverMicrostepping] = useState<number | null>(null);
  const [StepsPerMM, setStepDistance] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const calculateRotationDistance = () => {
    if (MotorStepAngle && DriverMicrostepping && StepsPerMM) {
      const calcResult = (
        (((360 / MotorStepAngle) * DriverMicrostepping) / StepsPerMM)
      ).toPrecision(8);
      setResult(`Rotation Distance: ${calcResult}`);
    } else {
      setResult('Please fill in all fields');
    }
  };

  return (
    <>
    <NextSeo
        title="Rotation Distance calculator"
        description="Various different calculators to provide help in predicting the load and power consumption of devices at household or at an industry, Calculator, Stepper motor, Battery, Battery Backup, UPS, Klipper, Rotation Distance, Steps per milimeter, mm, Leadscrew drive, Belt drive, Time, Load, Energy Solution, Tool, Accurate, Mekuva, 3D printer, Performance, Efficient"
        canonical="https://www.mekuva.com/calculator"
        openGraph={{
          url: 'https://www.mekuva.com/calculator',
          title: 'Rotation Distance calculator',
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
    <CalculatorContainer>
    <CalculatorForm>
              <h2>Rotation Distance - Calculator</h2>
              <label htmlFor="MotorStepAngle">Full Steps Per Rotation:</label>
              <Dropdown
                id="MotorStepAngle"
                onChange={(e) => setMotorStepAngle(Number(e.target.value))}
                value={MotorStepAngle ?? ''}
              >
                <option value="" disabled>Select full steps per rotation</option>
                {motorStepAngleOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Dropdown>
              <label htmlFor="DriverMicrostepping">Driver Microstepping:</label>
              <Dropdown
                id="DriverMicrostepping"
                onChange={(e) => setDriverMicrostepping(Number(e.target.value))}
                value={DriverMicrostepping ?? ''}
              >
                <option value="" disabled>Select microstepping</option>
                {microsteppingOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </Dropdown>
              <label htmlFor="StepsPerMM">Steps per milimeter:</label>
              <input
                type="number"
                id="StepsPerMM"
                value={StepsPerMM ?? ''}
                onChange={(e) => setStepDistance(Number(e.target.value))}
                required
              />
              <CalculateButton onClick={calculateRotationDistance}>Calculate</CalculateButton>
              {result && <Result>{result}</Result>}
            </CalculatorForm>
        </CalculatorContainer>
        </>
  );
}


const CalculatorContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;  /* Reduced padding */
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  max-width: 450px;  /* Reduced max width */
  margin: 2rem auto;
`;

const Dropdown = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  white-space: pre-wrap;  /* Allow text to wrap */

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const CalculatorForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  font-size: 16px; /* Reduced font size */

  label {
    margin-top: 10px;
    width: 100%;
    text-align: left;

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }

  input, select {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: calc(100% - 16px);

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;

const CalculateButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #ffeb3b;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #fdd835;
  }
`;

const Result = styled.div`
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  color: #333;
  font-size: 18px; /* Adjusted font size */

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;