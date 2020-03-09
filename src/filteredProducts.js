import axios from 'axios';
import { useState, useEffect } from 'react';

const useFilteredProducts = () => {
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const getProductList = async () => {
      let total = 0;
      let count = 0;
      const productResponse = await axios.get('http://localhost:8080/products');
      setProductsList(productResponse.data);
      productResponse.data.forEach((product) => {
        if (product.count !== 0) {
          if (filteredProducts[product.category] === undefined) {
            filteredProducts[product.category] = [product];
            total += product.count * product.price;
            count += product.count;
          } else {
            filteredProducts[product.category].push(product);
            total += product.count * product.price;
            count += product.count;
          }
        }
      });
      setTotalCost(total);
      setCartCount(count);
    };
    getProductList();
  }, []);
  return [filteredProducts, totalCost, cartCount, productsList];
};
export default useFilteredProducts;
