import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';

import style from './index.css';

export default class Pager extends Component {
  static propTypes = {
    dataPage: ImmutablePropTypes.map.isRequired,
    handlePage: PropTypes.func.isRequired,
    field: PropTypes.string.isRequired,
    rightPosition: PropTypes.bool.isRequired
  };

  handlePrev = () => {
    this.handlePage(this.parseValue(this.props.dataPage.get('page') - 1));
  };

  handleNext = () => {
    this.handlePage(this.parseValue(this.props.dataPage.get('page') + 1));
  };

  parseValue = (value) => {
    const totalPages = this.props.dataPage.get('totalPages') - 1;

    if (value < 0) {
      value = 0;
    }

    if (value > totalPages) {
      value = totalPages;
    }

    return value;
  };

  handlePage = (page) => {
    this.props.handlePage(this.props.field, page);
  };

  render() {
    const { dataPage } = this.props;

    const classContainer = classNames({
      container: true,
      [style.container]: true
    });

    const classText = classNames({
      'text-right': this.props.rightPosition,
      [style.text]: true
    });

    const classArrow = classNames({
      'text-right': this.props.rightPosition
    });

    return (
      <div className={ classContainer }>
        <div className={ classText }>
          { `${ dataPage.get('page') + 1 } / ${ dataPage.get('totalPages') }` }
        </div>
        <div className={ classArrow }>
          <span className={ style.arrow } onClick={ this.handlePrev }>{'<'}</span>
          <span className={ style.arrow } onClick={ this.handleNext }>{'>'}</span>
        </div>
      </div>
    );
  }
}

