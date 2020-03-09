import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';
import Button from '../Button';

function TotalCost(props) {
  const { total, onClickHandler } = props;

  return (
    <div className={styles.totalCard}>
      <div className={styles.totalCardText}>
        <div className={styles.total}>
          Total
        </div>
        <div className={styles.cost}>
          RS
        </div>
        <div className={styles.price}>
          {total}
        </div>
      </div>
      <hr />
      <div className={styles.totalCheckout}>
        <Button buttonColor="yellow" text="Checkout" onClickHandler={onClickHandler} />
      </div>
    </div>

  );
}
TotalCost.propTypes = {
  total: propTypes.number.isRequired,
  onClickHandler: propTypes.func.isRequired,
};

export default TotalCost;
