import * as React from 'react';

import { Carousel } from '.';

export default {
  title: 'Components/Carousel'
};

const slides = [
  { url: 'https://picsum.photos/id/0/500/280', title: 'beach' },
  { url: 'https://picsum.photos/id/1/500/280', title: 'boat' },
  { url: 'https://picsum.photos/id/2/500/280', title: 'forest' },
  { url: 'https://picsum.photos/id/3/500/280', title: 'city' },
  { url: 'https://picsum.photos/id/4/500/280', title: 'italy' }
];

export const BasicUsage = () => <Carousel slides={slides}></Carousel>;
