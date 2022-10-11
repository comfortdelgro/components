import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '.';

describe('Avatar', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<Avatar />);
    expect(container).toMatchSnapshot();
  });
});
