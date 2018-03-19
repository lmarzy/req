import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Header = ({ siteName, tagLine }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.logo}>{siteName}</h1>
      <p className={styles.tagLine}>{tagLine}</p>
    </div>
  </header>
);

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
};

export default Header;
