import React from 'react';
import propTypes from 'prop-types';
import * as styles from './index.module.css';

function ProductsTable(props) {
  const { filteredProducts } = props;
  const productsJSX = [];
  if (filteredProducts !== undefined) {
    const categories = Object.keys(filteredProducts);
    categories.forEach((category) => {
      productsJSX.push(<tr><td className={styles.tableCategory} colSpan={4}>{category}</td></tr>);
      const products = filteredProducts[category];
      products.forEach((product) => {
        productsJSX.push(
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.cart}</td>
            <td>{product.price * product.cart}</td>
          </tr>,
        );
      });
    });
  }

  return (
    <div className={styles.table}>
      <table border={1} className={styles.tableClass}>
        <tr>
          <th>
            Item
          </th>
          <th>
            Price
          </th>
          <th>
            Quantity
          </th>
          <th>
            Subtotal
          </th>

        </tr>
        <tbody>
          {productsJSX}
        </tbody>

      </table>
    </div>

  );
}
ProductsTable.propTypes = {
  filteredProducts: propTypes.objectOf(propTypes.string).isRequired,
};

export default ProductsTable;
