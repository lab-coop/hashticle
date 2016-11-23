'use strict';

import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, createMemoryHistory } from 'react-router';

const middleware = [ thunk ]

function App(Root, StoreService) {
  const store = createStore(StoreService, applyMiddleware(...middleware));

  return (
    <Provider store={store}>
      <Router history={createMemoryHistory()}>
        <Route path="/" component={Root}>
        </Route>
      </Router>
    </Provider>
  )
}

App.deps = ['Root', 'Store'];
module.exports = App;
