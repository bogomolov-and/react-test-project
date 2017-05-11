import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';

import style from './index.css';

const Sorting = (props) => {
  const direction = props.sort.get(props.field);
  const classArrow = classNames({
    [style.sortHandleArrow]: true,
    [style.sortHandleArrowUp]: direction === 'ASC',
    [style.sortHandleArrowDown]: direction === 'DESC'
  });
  return (
    <div>
      <div className={ classNames({ container: true, [style.sort]: true }) }>
        <div className={ classNames({ [style.sortBlock]: true, [style.sortTitle]: true }) }>Sort by</div>
        <div
          className={ classNames({ [style.sortBlock]: true, [style.sortHandle]: true }) }
          onClick={ () => {
            props.handler(props.field, direction === 'ASC' ? 'DESC' : 'ASC');
          } }
        >
          {props.field}
          <span className={ classArrow }>{'>'}</span>
        </div>
      </div>
    </div>
  );
};

Sorting.propTypes = {
  sort: ImmutablePropTypes.map.isRequired,
  field: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default Sorting;
