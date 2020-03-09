import React from 'react';
import './App.css';
import Header from './components/Header';
import FilterBlock from './components/FilterBlock';

const App = () => (
  <div className="App">
    <Header testId="header-test" />
    <FilterBlock />
  </div>
);

export default App;
