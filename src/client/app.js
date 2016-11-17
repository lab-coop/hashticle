'use strict';

import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const middleware = [ thunk ]

function App(Root, StoreService) {
  const store = createStore(StoreService, applyMiddleware(...middleware));

  return (
    <Provider store={store}>
      <Root title="Read news by tags" />
    </Provider>
  )
}


App.deps = ['Root', 'Store'];
module.exports = App;
