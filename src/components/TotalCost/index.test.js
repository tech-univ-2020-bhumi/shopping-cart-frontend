import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TotalCost from './index';


describe('the TotalCost component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<TotalCost />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should immediately call onclick handler when checkout is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<TotalCost onClickHandler={onClickMock} />);

    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });
});
