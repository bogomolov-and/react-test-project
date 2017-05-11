import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import classNames from 'classnames';

import style from './index.css';

export default class DropDown extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: ImmutablePropTypes.list.isRequired
  };

  state = {
    visible: false
  };

  toggleDropdown = () => {
    const { visible } = this.state;

    this.setState({ visible: !visible });

    document.body[visible ? 'removeEventListener' : 'addEventListener']('click', this.searchParentElementDropdown);
  };

  searchParentElementDropdown = (event) => {
    const target = event.target;

    if (target.closest(`.${ style.dropdown }`) !== this.dropdown) {
      this.toggleDropdown(event);
    }
  };

  render() {
    const {
      name,
      options
    } = this.props;

    const isOptions = options.size > 1;
    const label = isOptions ? name : options.first();

    const classLabel = classNames({
      [style.dropdownLabel]: true,
      [style.dropdownPointer]: isOptions
    });

    const classArrow = classNames({
      [style.dropdownArrow]: true,
      [style.dropdownPointer]: isOptions
    });

    const classOptins = classNames({
      [style.options]: true,
      [style.visible]: this.state.visible
    });

    return (<div ref={ ref => this.dropdown = ref } className={ style.dropdown } onClick={ this.toggleDropdown }>
      <div className={ classLabel }>{ label }</div>
      { isOptions ? <div className={ classArrow }>{ '>' }</div> : null }
      { isOptions ? <div className={ classOptins }>{
        options.map((text, index) => <div key={ index }>{ text }</div>)
      }</div> : null }
    </div>);
  }
}
