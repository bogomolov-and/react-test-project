import React from 'react';
import PropTypes from 'prop-types';

import style from './index.css';

const Layout = ({ children }) => (
  <div>
    <div className="container text-center">
      <img className={ style.logo } src="assets/img/logo.png" alt="Google"/>
    </div>
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.array.isRequired
};

export default Layout;
