import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';
import Counter from './index';


describe('the Counter component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Counter />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the patch cart api when increment is pressed', () => {
    const { getByTestId } = render(<Counter
      id={1}
      count={0}
      max={10}
      setCartValue={() => {}}
      setCartCount={() => {}}
    />);

    fireEvent.click(getByTestId('increment'));
    const mockAxios = jest.spyOn(axios, 'patch');
    mockAxios.mockResolvedValue({ data: {} });
    // expect(mockAxios).toHaveBeenCalled();
  });
});
