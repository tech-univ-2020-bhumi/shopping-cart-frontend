import React, { useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import * as styles from './index.module.css';

const Counter = (props) => {
  const {
    id, setCartCount, cartCount, max,
  } = props;
  const { count } = props;
  const [cartValue, setCartValue] = useState(count);
  const onClickCounter = (sign) => {
    if (sign === '+' && cartValue < max) {
      const patchCart = async () => {
        await axios.patch(`http://localhost:8080/products/${id}/cart`, {
          value: cartValue + 1,
        });
        setCartValue(cartValue + 1);
        setCartCount(cartCount + 1);
      };
      patchCart();
    } else if (sign === '-' && cartValue > 0) {
      const patchCart = async () => {
        await axios.patch(`http://localhost:8080/products/${id}/cart`, {
          value: cartValue - 1,
        });
        setCartValue(cartValue - 1);
        setCartCount(cartCount - 1);
      };
      patchCart();
    }
  };
  return (
    <div className={styles.counter} data-testid="counter-div">
      <button data-testid="decrement" className={styles.counterButton} onClick={() => onClickCounter('-')} type="button">-</button>
      {cartValue}
      <button data-testid="increment" className={styles.counterButton} onClick={() => onClickCounter('+')} type="button">+</button>
    </div>

  );
};
Counter.propTypes = {
  id: propTypes.number.isRequired,
  count: propTypes.number.isRequired,
  cartCount: propTypes.number.isRequired,
  max: propTypes.number.isRequired,
  setCartCount: propTypes.func.isRequired,
};

export default Counter;
