import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
