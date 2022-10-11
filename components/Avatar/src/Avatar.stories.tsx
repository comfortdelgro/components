import React from 'react';

import { Avatar } from '.';
import notes from '../README.md';

export default {
  title: 'Components/Avatar',
  parameters: { notes }
};

export const BasicUsage = () => <Avatar name="John Doe" />;
export const WithImage = () => (
  <Avatar name="John Doe" src="https://picsum.photos/40/40" />
);
export const WithInitilas = () => <Avatar name="John Doe" initials="DJ" />;
