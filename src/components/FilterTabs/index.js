import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';


const FilterTab = (props) => {
  const { categoryList, onCLickFilter } = props;
  const categories = [<button data-testid="filter-button" type="button" className={styles.categoryButton} onClick={() => onCLickFilter('All')}>All</button>];
  if (categoryList !== undefined) {
    categoryList.forEach((category) => {
      categories.push(<button data-testid="filter-button" type="button" className={styles.categoryButton} onClick={() => onCLickFilter(category)}>{category}</button>);
    });
  }

  return (
    <div className={styles.bar}>
      {categories}
    </div>

  );
};
FilterTab.propTypes = {
  categoryList: propTypes.arrayOf(propTypes.string).isRequired,
  onCLickFilter: propTypes.func.isRequired,
};

export default FilterTab;
