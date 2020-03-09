import React from 'react';
import propTypes from 'prop-types';
import Products from '../components/Products';
import * as styles from './index.module.css';

const ListOfProducts = (props) => {
  const {
    filterCategory, productList, cartCount, setCartCount,
  } = props;
  let products = [];
  const soldOutProducts = [];
  if (filterCategory === 'All' && productList !== undefined) {
    productList.forEach((product) => {
      if (product.count !== product.quantity) {
        products.push(<Products
          cardStyle="normal"
          id={product.id}
          name={product.name}
          price={product.price}
          count={product.count}
          link={product.link}
          key={product.id}
          quantity={product.quantity}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />);
      } else {
        soldOutProducts.push(<Products
          cardStyle="sold-out"
          id={product.id}
          name={product.name}
          price={product.price}
          count={product.count}
          link={product.link}
          key={product.id}
          quantity={product.quantity}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />);
      }
    });
    products = [...products, ...soldOutProducts];
  } else if (filterCategory !== undefined && productList !== undefined) {
    const filteredProducts = productList.filter((product) => product.category === filterCategory);
    filteredProducts.forEach((product) => {
      if (product.quantity !== product.count) {
        products.push(<Products
          cardStyle="normal"
          id={product.id}
          name={product.name}
          price={product.price}
          count={product.count}
          link={product.link}
          quantity={product.quantity}
          key={product.id}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />);
      } else {
        soldOutProducts.push(<Products
          cardStyle="sold-out"
          id={product.id}
          name={product.name}
          price={product.price}
          count={product.count}
          link={product.link}
          quantity={product.quantity}
          key={product.id}
          cartCount={cartCount}
          setCartCount={setCartCount}
        />);
      }
    });
    products = [...products, ...soldOutProducts];
  }


  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {filterCategory}
      </div>
      <div className={styles.list}>
        {products}
      </div>
    </div>
  );
};
ListOfProducts.propTypes = {
  filterCategory: propTypes.string.isRequired,
  productList: propTypes.arrayOf(propTypes.object).isRequired,
  cartCount: propTypes.number.isRequired,
  setCartCount: propTypes.func.isRequired,
};
export default ListOfProducts;
