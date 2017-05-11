import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, List, fromJS } from 'immutable';

import SecondBlock from 'components/SecondBlock';
import Filter from 'components/Filter';
import Sorting from 'components/Sorting';
import Title from 'components/Title';
import Pager from 'components/Pager';
import Goods from 'components/Goods';

import catalogData from './../../constants/catalog';

export default class Catalog extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  state = {
    filter: Map({
      man: true,
      women: true,
      children: false
    }),
    sort: Map({
      price: 'ASC'
    }),
    paging: fromJS({
      man: {
        page: 0,
        size: 3,
        totalSize: 0,
        totalPages: 0
      },
      women: {
        page: 0,
        size: 3,
        totalSize: 0,
        totalPages: 0
      },
      children: {
        page: 0,
        size: 3,
        totalSize: 0,
        totalPages: 0
      }
    }),
    catalog: Map({})
  };

  componentDidMount() {
    const data = catalogData.reduce((newData, item, key) => {
      const itemSort = item.sort(this.handleSort);
      const totalPages = Math.round(itemSort.size / newData.getIn(['paging', key, 'size']));
      newData = newData.setIn(['paging', key, 'totalSize'], itemSort.size);
      newData = newData.setIn(['paging', key, 'totalPages'], totalPages);
      newData = newData.setIn(['catalog', key], this.selectData(itemSort, key));
      return newData;
    }, Map({ paging: this.state.paging, catalog: Map({}) }));

    this.setState({
      paging: data.get('paging'),
      catalog: data.get('catalog')
    });
  }

  setFilter = (check) => {
    let filter = this.state.filter;

    if (check === 'ALL') {
      let checkTrue = 0;
      let checkFalse = 0;

      filter.forEach(item => {
        item ? checkTrue += 1 : checkFalse += 1;
      });

      const res = checkTrue > checkFalse;

      filter = filter.map(() => !res);
    } else {
      filter = filter.set(check, !filter.get(check));
    }

    this.setState({ filter });
  };

  setSort = (field, direction) => {
    let {
      sort
    } = this.state;

    sort = sort.set(field, direction);
    const catalog = catalogData.map((item, key) => {
      const itemSort = item.sort((a, b) => this.handleSort(a, b, direction));
      return this.selectData(itemSort, key);
    });

    this.setState({ sort, catalog });
  };

  setPage = (field, page) => {
    let {
      paging,
      catalog
    } = this.state;

    const sectionData = catalogData.get(field);

    paging = paging.setIn([field, 'page'], page);
    catalog = catalog.set(field, this.selectData(sectionData, field, paging));

    this.setState({ paging, catalog });
  };

  handleSort = (a, b, sortDirection) => {
    const sortField = this.selectSortField();
    sortDirection = sortDirection || this.state.sort.get(sortField);
    if (sortDirection === 'ASC') {
      if (a.get(sortField) > b.get(sortField)) { return 1; }
      if (a.get(sortField) < b.get(sortField)) { return -1; }
    } else {
      if (a.get(sortField) > b.get(sortField)) { return -1; }
      if (a.get(sortField) < b.get(sortField)) { return 1; }
    }
    if (a.get(sortField) === b.get(sortField)) { return 0; }
  };

  selectSortField = () => {
    const sort = this.state.sort;
    const keys = sort.keySeq();
    return keys.find(item => sort.get(item) === 'DESC' || sort.get(item) === 'ASC');
  };

  selectData = (list, key, dataPaging) => {
    dataPaging = dataPaging || this.state.paging;
    const paging = dataPaging.get(key);
    const from = paging.get('page') * paging.get('size');
    const to = from + paging.get('size') - 1;
    let newList = List([]);

    for (let i = from; i <= to; i++) {
      if (list.has(i)) {
        newList = newList.push(list.get(i));
      }
    }

    return newList;
  };

  goToCart = (sectionName, pageName) => {
    this.context.router.history.push(`/${ sectionName }/${ pageName }`);
  };

  render() {
    const {
      filter,
      sort,
      paging,
      catalog
    } = this.state;

    let count = 0;

    return (
      <div>
        <SecondBlock>
          <Filter elements={ filter } handler={ this.setFilter }/>
        </SecondBlock>
        <Sorting sort={ sort } field={ this.selectSortField() } handler={ this.setSort }/>
        {catalog.map((sectionData, sectionName) => {
          count++;
          if (filter.get(sectionName)) {
            return (
              <div key={ sectionName }>
                <Title rightPosition={ count % 2 === 0 }>{ sectionName }</Title>
                <Pager
                  dataPage={ paging.get(sectionName) }
                  field={ sectionName }
                  handlePage={ this.setPage }
                  rightPosition={ count % 2 === 1 }
                />
                <Goods key={ sectionName } data={ sectionData } handleClick={ pageName => this.goToCart(sectionName, pageName) }/>
              </div>
            );
          }
        }).toArray()}
      </div>
    );
  }
}
