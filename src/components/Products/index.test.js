import React from 'react';
import { render } from '@testing-library/react';
import Product from './index';


describe('the product component', () => {
  it('should render correctly when cardStyle is normal', () => {
    const { asFragment } = render(<Product cardStyle="normal" />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should render correctly when cardStyle is sold-out', () => {
    const { asFragment } = render(<Product cardStyle="sold-out" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
