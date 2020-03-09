import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductsPage from './ProductsPage';

const App = () => (
  <div className="App">
    <Header testId="header-test" />
    <ProductsPage />
  </div>
);

export default App;
