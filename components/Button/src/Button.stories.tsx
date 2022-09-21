import React from 'react';

import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  NegativeButton,
  TertiaryButton,
  ButtonSize
} from '.';
// import notes from '../README.md';

export default {
  title: 'Components/Button',
  parameters: {
    // notes,
    source: {
      type: 'auto'
    },
    argTypes: {
      size: {
        control: 'select',
        options: [ButtonSize.Large, ButtonSize.Md, ButtonSize.Sm],
        defaultValue: ButtonSize.Md,
        description: 'Control Button size'
      }
    }
  }
};

export const Base = () => <BaseButton>This is a Base Button</BaseButton>;
export const Primary = () => (
  <PrimaryButton>This is a Primary Button</PrimaryButton>
);
export const Secondary = () => (
  <SecondaryButton>This is a Secondary Button</SecondaryButton>
);
export const Negative = () => (
  <NegativeButton>This is a Negative Button</NegativeButton>
);
export const Tertiary = () => (
  <TertiaryButton>This is a Tertiary Button</TertiaryButton>
);
