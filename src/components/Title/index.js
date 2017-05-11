import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './index.css';

const Title = (props) => {
  const classTitle = classNames({
    [style.title]: true,
    [style.right]: props.rightPosition
  });

  return (
    <div className="container">
      <div className={ classTitle }>
        <span className={ style.titleSpan }>{ props.children }</span>
      </div>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  rightPosition: PropTypes.bool
};

export default Title;
