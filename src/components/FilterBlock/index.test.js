import React from 'react';
import { render } from '@testing-library/react';
import FilterBlock from './index';

describe('the FilterBlock component ', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<FilterBlock testId="test-filter-block" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
