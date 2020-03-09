import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import NotificationBadge, { Effect } from 'react-notification-badge';
import ProductsPage from './ProductsPage';
import Cart from './Cart';


library.add(
  fab,
  faShoppingCart,
);

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link to="/cart">
            <button type="button" className="cart-icon">
              <FontAwesomeIcon icon="shopping-cart" />
              <NotificationBadge count={cartCount} effect={Effect.SCALE} />
            </button>
          </Link>
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <ProductsPage
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
