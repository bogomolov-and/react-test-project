import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';

import priceFormat from 'utils/priceFormat';

import DropDown from 'components/DropDown';
import Colors from 'components/Colors';

import style from './index.css';

const imgPath = 'assets/images/catalog/small/';

const Goods = ({ data, handleClick }) => {
  const classCol = classNames({
    'col-md-4': true,
    [style.col]: true
  });

  const colRight = classNames({
    'col-md-6': true,
    'text-right': true,
    [style.colRight]: true
  });

  const rowTop = classNames({
    row: true,
    [style.rowTop]: true
  });

  const rowBottom = classNames({
    row: true,
    [style.rowBottom]: true
  });

  return (
    <div className="container">
      <div className={ style.row }>
        {data.map(goodData => {
          const title = goodData.get('title');
          const name = goodData.get('name');
          return (
            <div key={ goodData.get('id') } className={ classCol }>
              <div className={ style.good }>
                <div className={ rowTop }>
                  <div className="col-md-6">
                    <DropDown name="size" options={ goodData.get('size') }/>
                  </div>
                  <div className={ colRight }>
                    <Colors colors={ goodData.get('color') }/>
                  </div>
                </div>
                <div className={ style.clickBlock } onClick={ () => handleClick(name) }>
                  <div className={ style.imgBlock }>
                    <img className={ style.imgBlockImg } src={ `${ imgPath }${ name }.${ goodData.get('format') }` } alt={ title }/>
                  </div>
                  <div className={ rowBottom }>
                    <div className="col-md-8">
                      <span className={ style.label }>{title}</span>
                    </div>
                    <div className="col-md-4 text-right">
                      <span className={ style.price }>{ priceFormat(goodData.get('price')) }</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Goods.propTypes = {
  data: ImmutablePropTypes.list.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Goods;
