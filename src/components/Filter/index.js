import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import CheckBox from 'components/CheckBox';
import Button from 'components/Button';

import style from './index.css';

const Filter = ({ elements, handler }) => (
  <div className="row">
    <div className="col-md-8">
      <div className={ style.wrap }>
        {elements.map((item, key) => (
          <CheckBox
            key={ key }
            onClick={ () => handler(key) }
            checked={ item }
          >
            {key}
          </CheckBox>
        )).toArray()}
      </div>
    </div>
    <div className="col-md-4 text-right">
      <Button onClick={ () => handler('ALL') }>see all products</Button>
    </div>
  </div>
);

Filter.propTypes = {
  elements: ImmutablePropTypes.map.isRequired,
  handler: PropTypes.func.isRequired
};

export default Filter;
