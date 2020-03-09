import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import axios from 'axios';
import Cart from './index';

describe('the cart page container', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const { asFragment } = render(<Router history={history}><Cart /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should make an api call when rendered', () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });

    render(<Router history={history}><Cart /></Router>);
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/products');
  });
});
