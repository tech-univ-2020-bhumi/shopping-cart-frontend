import React from 'react';
import { render } from '@testing-library/react';
import ListOfProducts from './index';


describe('the products page container', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ListOfProducts />);

    expect(asFragment()).toMatchSnapshot();
  });
});
