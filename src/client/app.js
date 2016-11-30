'use strict';

import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, createMemoryHistory } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const middleware = [ thunk ]

function App(Root, StoreService) {
  const store = createStore(StoreService, applyMiddleware(...middleware));

  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Router history={createMemoryHistory()}>
          <Route path="/" component={Root} >
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

App.deps = ['Root', 'Store'];
module.exports = App;
