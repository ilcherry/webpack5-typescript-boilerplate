import { combineReducers } from 'redux';

import page1Reducer from './page1Reducer';
import page2Reducer from './page2Reducer';

const reducers = combineReducers({
  page1Store: page1Reducer,
  page2Store: page2Reducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
