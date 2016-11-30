'use strict';

import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, createMemoryHistory } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const middleware = [ thunk ]

function App(Root, StoreService, AuthService, LoginPage) {
  const store = createStore(StoreService, applyMiddleware(...middleware));
  const requireAuth = (nextState, replace) => {
    if (!AuthService.isLoggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Router history={createMemoryHistory()}>
          <Route path="/login" component={LoginPage}>
          </Route>
          <Route path="/" component={Root} onEnter={requireAuth} >
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

App.deps = ['Root', 'Store', 'authService', 'LoginPage'];
module.exports = App;
