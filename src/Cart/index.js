import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ProductsTable from '../components/ProductsTable';
import TotalCost from '../components/TotalCost';
import Button from '../components/Button';
import * as styles from './index.module.css';
import useFilteredProducts from '../hooks/filteredProducts';

const Cart = () => {
  const history = useHistory();
  const [filteredProducts, totalCost, cartCount, productsList] = useFilteredProducts();
  const onCheckout = async () => {
    const patchQuantities = async () => {
      await axios.patch('http://localhost:8080/quantities', productsList);
      history.push('/');
    };
    patchQuantities();
  };
  const onContinueShopping = () => {
    history.push('/');
  };
  return (
    <div className={styles.page}>
      <div className={styles.text}>
        Your Shopping Cart (
        {cartCount}
        {' '}
        items)
      </div>
      <div className={styles.display}>
        <ProductsTable filteredProducts={filteredProducts} />
        <div className={styles.button}>
          <TotalCost total={totalCost} onClickHandler={onCheckout} />
          <Button buttonColor="grey" text="Continue Shopping" onClickHandler={onContinueShopping} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
