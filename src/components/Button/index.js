import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

const Button = (props) => {
  const {
    text, onClickHandler,
  } = props;
  return (
    <button data-testid="test-btn" className={styles.white} onClick={onClickHandler} type="button">{text}</button>
  );
};
Button.propTypes = {
  text: propTypes.string.isRequired,
  onClickHandler: propTypes.func.isRequired,
};
export default Button;
