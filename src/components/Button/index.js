import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './index.css';

const Button = (props) => {
  const className = classNames({
    [style.btn]: true,
    btn: true,
    'btn-lg': true
  });
  return (<div
    className={ className }
    onClick={ () => props.onClick(props.children) }
  >
    { props.children }
  </div>);
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
