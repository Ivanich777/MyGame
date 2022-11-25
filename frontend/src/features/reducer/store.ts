import { createStore, combineReducers } from 'redux';

import { cardReducer } from './cardReduser';

const store = createStore(
  combineReducers({
    cardState: cardReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;