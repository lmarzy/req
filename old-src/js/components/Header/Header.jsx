import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.scss';

const Header = props => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.logo}>{props.siteName}</h1>
      <p className={styles.tagline}>{props.tagLine}</p>
    </div>
  </header>
);

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
};

export default Header;
