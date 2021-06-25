import { all, fork } from 'redux-saga/effects';

import { watchFetchRoles } from './page1Saga';
import { watchFetchCount } from './page2Saga';

function* rootSaga(): Generator {
  yield all([fork(watchFetchRoles), fork(watchFetchCount)]);
}

export default rootSaga;
