import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

function Reducers(container) {
  const NewsActions = container.get('NewsActions');
  const AuthActions = container.get('AuthActions');

  const news = (state = {items:[]}, action) => {
    switch (action.type) {
      case NewsActions.RECEIVE_NEWS:
        return {
          ...state,
          items: action.news,
          state: NewsActions.RECEIVE_NEWS
        }
      default:
        return state
    }
  }

  const user = (state = null, action) => {
    switch (action.type) {
      case AuthActions.USER_UPDATE:
        return action.user
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
    routing: routerReducer,
    user,
    news,
    form: formReducer
  });

  return rootReducer;
}

Reducers.type = 'factory';
module.exports = Reducers;
