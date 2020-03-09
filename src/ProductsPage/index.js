import React, { useState } from 'react';
import propTypes from 'prop-types';
import ListOfProducts from '../ListOfProducts';
import FilterTabs from '../components/FilterTabs';
import * as styles from './index.module.css';
import useProductsAndCategories from '../productsCategories';

const ProductsPage = (props) => {
  const { cartCount, setCartCount } = props;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, productList] = useProductsAndCategories();
  return (
    <div className={styles.productsPage}>
      <div className={styles.productsHeader}>
        <div className={styles.productsPageText}>
          Filter categories
        </div>
        <FilterTabs categoryList={categories} onCLickFilter={setSelectedCategory} />
      </div>
      <ListOfProducts
        filterCategory={selectedCategory}
        productList={productList}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </div>
  );
};
ProductsPage.propTypes = {
  cartCount: propTypes.number.isRequired,
  setCartCount: propTypes.func.isRequired,
};

export default ProductsPage;
