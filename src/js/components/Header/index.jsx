import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Header = props => (
  <header className={styles.header}>
    <h1 className={styles.logo}>{props.siteName}</h1>
  </header>
);

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Header;
