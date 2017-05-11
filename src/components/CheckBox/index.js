import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './index.css';

const CheckBox = (props) => {
  const className = classNames({
    [style.checkBlock]: true,
    [style.checked]: props.checked
  });

  return (<div
    className={ style.checkbox }
    onClick={ props.onClick }
  >
    <div className={ className }/>
    { props.children }
  </div>);
};

CheckBox.propTypes = {
  children: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CheckBox;
