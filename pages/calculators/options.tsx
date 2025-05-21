import React from 'react';

interface Option {
  value: number;
  label: string;
}

export const motorStepAngleOptions: Option[] = [
  { value: 1.8, label: '1.8 (200 per revolution)' },
  { value: 0.9, label: '0.9 (400 per revolution)' },
  { value: 7.5, label: '7.5 (48 per revolution)' },
];

export const microsteppingOptions: Option[] = [
  { value: 1, label: '1 - Full step' },
  { value: 2, label: '1/2 - Half step' },
  { value: 4, label: '1/4 - Quarter step' },
  { value: 8, label: '1/8 - uStep (mostly Gen6)' },
  { value: 16, label: '1/16 - uStep (Smoothieboard)' },
  { value: 32, label: '1/32 - uStep (Crazy Smoothieboard)' },
];

export const beltpresetsOptions: Option[] = [
  { value: 2, label: '2mm Pitch (GT2 mainly)' },
  { value: 5.08, label: '0.2" XL belt (5.08mm)' },
  { value: 5, label: '5mm Pitch (T5, GT2, HTD)' },
  { value: 2.5, label: 'T2.5 (2.5mm)' },
  { value: 2.03, label: 'MXL belt (2.03mm)' },
  { value: 3, label: '3mm Pitch (GT2, HTD)' },
];

export const beltpresetsLeadOptions: Option[] = [
  { value: 1.25, label: 'M8 - metric (1.25mm per rotation)' },
  { value: 1, label: 'M6 - metric (1mm per rotation)' },
  { value: 0.8, label: 'M5 - metric (0.8mm per rotation)' },
  { value: 12, label: '12 (12mm per rotation)' },
  { value: 16, label: '16 (16mm per rotation)' },
  { value: 25, label: '25 (25mm per rotation)' },
  { value: 1.41111, label: '5/16"-18 imperial coarse (1.41111mm per rotation)' },
  { value: 1.270, label: '3/16"-20 imperial (1.270mm per rotation)' },
  { value: 1.5875, label: '1/4"-16 Acme (1.5875mm per rotation)' },
];

const Options: React.FC = () => (
  <div>
    <h3>Motor Step Angle Options</h3>
    <ul>
      {motorStepAngleOptions.map((option) => (
        <li key={option.value}>{option.label}</li>
      ))}
    </ul>
    <h3>Microstepping Options</h3>
    <ul>
      {microsteppingOptions.map((option) => (
        <li key={option.value}>{option.label}</li>
      ))}
    </ul>
    <h3>Belt Presets Options</h3>
    <ul>
      {beltpresetsOptions.map((option) => (
        <li key={option.value}>{option.label}</li>
      ))}
    </ul>
    <h3>Belt Presets Lead Options</h3>
    <ul>
      {beltpresetsLeadOptions.map((option) => (
        <li key={option.value}>{option.label}</li>
      ))}
    </ul>
  </div>
);

export default Options;
