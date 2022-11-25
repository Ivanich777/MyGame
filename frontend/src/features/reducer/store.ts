import { createStore, combineReducers } from 'redux';
import { userReducer } from '../Auth/reducer/userReducer';

import { cardReducer } from './cardReduser';

const store = createStore(
  combineReducers({
    cardState: cardReducer,
    userState: userReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
