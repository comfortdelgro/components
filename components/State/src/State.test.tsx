import React from 'react';
import { render } from '@testing-library/react';
import State from '.';

describe('State', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<State />);
    expect(container).toMatchSnapshot();
  });
});
