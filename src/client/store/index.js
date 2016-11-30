'use strict';
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

function Reducers(container) {
  const NewsActions = container.get('NewsActions');

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

  const rootReducer = combineReducers({
    news,
    form: formReducer
  });

  return rootReducer;
}

Reducers.type = 'factory';
module.exports = Reducers;
