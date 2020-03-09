import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

describe('the Header component ', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header testId="test-header" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
