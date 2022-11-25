import { createStore, combineReducers } from 'redux';

import { cardReducer } from './cardReduser';
import { topicReducer } from '../Topic/topicReducer';

const store = createStore(
  combineReducers({
    cardState: cardReducer,
    topicState: topicReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
