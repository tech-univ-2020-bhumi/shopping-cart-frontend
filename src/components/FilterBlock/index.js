import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import FilterTabs from '../FilterTabs';

const FilterBlock = (props) => {
  const { testId } = props;
  return (
    <div className={styles.filter} data-testid={testId}>
      <h3>Filter Categories</h3>
      <FilterTabs />
    </div>
  );
};

FilterBlock.propTypes = {
  testId: propTypes.string.isRequired,
};

export default FilterBlock;
