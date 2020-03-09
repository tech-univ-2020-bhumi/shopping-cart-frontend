import React from 'react';
import { render } from '@testing-library/react';
import FilterTab from './index';


describe('the FilterTab component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<FilterTab />);

    expect(asFragment()).toMatchSnapshot();
  });
});
