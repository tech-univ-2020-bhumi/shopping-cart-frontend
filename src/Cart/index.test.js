import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Cart from './index';

describe('the cart page container', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    const { asFragment } = render(<Router history={history}><Cart /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
