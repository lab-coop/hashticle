'use strict';
import { combineReducers } from 'redux'

function Reducers(container) {
  const NewsActions = container.get('NewsActions');

  const news = (state = {items:[]}, action) => {
    switch (action.type) {
      case NewsActions.RECEIVE_NEWS:
        return {
          ...state,
          items: action.news
        }
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
    news
  });

  return rootReducer;
}

Reducers.type = 'factory';
module.exports = Reducers;
