import React from 'react';
import propTypes from 'prop-types';
import './index.css';
import Counter from '../CounterSection';


function Product(props) {
  const {
    id, name, imageLink, price, count, quantity, cartCount, setCartCount, cardStyle,
  } = props;
  return (
    <div data-testid="product" className={cardStyle === 'normal' ? 'product-card' : 'product-card-sold-out'}>
      <img src={imageLink} alt={name} />
      <p>
        {name}
      </p>
      <p>
        MRP
        {' '}
        {price}
        {' '}
        /
      </p>
      <Counter
        count={count}
        max={quantity}
        id={id}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </div>

  );
}
Product.propTypes = {
  cartCount: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  cardStyle: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  quantity: propTypes.number.isRequired,
  imageLink: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
  setCartCount: propTypes.func.isRequired,
};

export default Product;