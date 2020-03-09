import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './index';


describe('the Counter component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Counter />);

    expect(asFragment()).toMatchSnapshot();
  });
});
