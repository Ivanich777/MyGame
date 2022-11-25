import { createStore, combineReducers } from 'redux';
import { userReducer } from '../Auth/reducer/userReducer';

import { cardReducer } from './cardReduser';
import { topicReducer } from '../Topic/topicReducer';

const store = createStore(
  combineReducers({
    cardState: cardReducer,
    topicState: topicReducer,
    userState: userReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
