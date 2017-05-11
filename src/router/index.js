import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import Layout from 'containers/Layout';
import Catalog from 'containers/Catalog';
import Cart from 'containers/Cart';

class MyRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Layout>
          <Route exact path="/" render={ () => (<Redirect to="catalog"/>) }/>
          <Route path="/catalog" component={ Catalog }/>
          <Route path="/:section/:goodName" component={ Cart }/>
        </Layout>
      </HashRouter>
    );
  }
}

export default MyRouter;
