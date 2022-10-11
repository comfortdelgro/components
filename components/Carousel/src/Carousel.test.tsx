import React from 'react';
import { render } from '@testing-library/react';
import Carousel from '.';

describe('Carousel', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<Carousel />);
    expect(container).toMatchSnapshot();
  });
});
