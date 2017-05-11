import React from 'react';
import PropTypes from 'prop-types';

import style from './index.css';

const SecondBlock = (props) => (
  <div className={ style.second }>
    <div className="container">
      {props.children}
    </div>
  </div>
);

SecondBlock.propTypes = {
  children: PropTypes.element.isRequired
};

export default SecondBlock;
