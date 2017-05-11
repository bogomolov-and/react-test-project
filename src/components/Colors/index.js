import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import style from './index.css';

const Colors = ({ colors }) => (
  <div>
    {
      colors.map((color, index) => <div key={ index } className={ style.circle } style={ { background: color } }/>)
    }
  </div>
);

Colors.propTypes = {
  colors: ImmutablePropTypes.list.isRequired
};

export default Colors;
