import React from 'react';
import NotificationBadge, { Effect } from 'react-notification-badge';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import propTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import * as styles from './index.module.css';


const Header = (props) => {
  const { testId } = props;
  return (
    <Router>
      <div data-testid={testId} className={styles.header}>
        <Link to="/cart">
          <AiOutlineShoppingCart className={styles.cart} />
          <NotificationBadge count={1} effect={Effect.SCALE} className={styles.notif} />
        </Link>
      </div>
    </Router>
  );
};

Header.propTypes = {
  testId: propTypes.string.isRequired,
};

export default Header;
