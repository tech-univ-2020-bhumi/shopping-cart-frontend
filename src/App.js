import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Header />
      </Switch>
    </Router>
  </div>
);

export default App;
