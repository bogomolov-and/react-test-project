import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import priceFormat from 'utils/priceFormat';

import SecondBlock from 'components/SecondBlock';
import Title from 'components/Title';
import Colors from 'components/Colors';

import catalogData from './../../constants/catalog';

import style from './index.css';

const imgPath = '/assets/images/catalog/large/';

export default class Catalog extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  state = {
    cart: Map({})
  };

  componentDidMount() {
    const {
      section,
      goodName
    } = this.props.match.params;

    const cart = catalogData.get(section).find(item => item.get('name') === goodName);

    this.setState({ cart });
  }

  goToBack = () => {
    this.context.router.history.goBack();
  };

  render() {
    const { cart } = this.state;
    const title = cart.get('title') || '';
    return (
      <div>
        <SecondBlock>
          <div className={ style.goBack } onClick={ this.goToBack }>
            <span className={ style.arrow }>{ '<' }</span>
            <span>Back to catalog</span>
          </div>
        </SecondBlock>
        <div className={ style.titleWrap }>
          <Title>{ title }</Title>
        </div>
        <div className="container">
          <div className={ style.cart }>
            <div className="col-md-8 text-center">
              <img src={ `${ imgPath }${ cart.get('name') }.${ cart.get('format') }` } alt={ title }/>
            </div>
            <div className="col-md-4">
              <div className={ style.infoWrap }>
                <div className="col-md-6 text-right">{ priceFormat(cart.get('price')) }</div>
                <div className="col-md-6 text-left">Price</div>
              </div>
              {
                cart.get('color') && cart.get('color').size > 0 ?
                  <div className={ style.infoWrap }>
                    <div className="col-md-6 text-right">{ <Colors colors={ cart.get('color') }/> }</div>
                    <div className="col-md-6 text-left">Colors</div>
                  </div>
                : null
              }
              <div className={ style.infoWrap }>
                <div className="col-md-6 text-right">{ cart.get('color') && cart.get('size').join(', ') }</div>
                <div className="col-md-6 text-left">Sizes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
