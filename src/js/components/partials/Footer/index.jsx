import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => (
  <footer>
    <small>&copy; {props.year}</small>
  </footer>
);

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Footer;
