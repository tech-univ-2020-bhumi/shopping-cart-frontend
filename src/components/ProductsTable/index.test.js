import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductsTable from './index';


describe('the ProductsTable component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ProductsTable />);

    expect(asFragment()).toMatchSnapshot();
  });
});
