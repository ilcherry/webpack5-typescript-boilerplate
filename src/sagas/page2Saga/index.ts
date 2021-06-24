import { put, takeEvery } from '@redux-saga/core/effects';
import { Actions } from 'actions/page2Action';

import request from 'utils/request';

export function* fetchCount(): Generator {
  try {
    const { count } = yield request({
      url: '/api/count',
    });

    yield put({
      type: Actions.FETCH_COUNT,
      payload: {
        count,
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export function* watchFetchCount(): Generator {
  yield takeEvery(Actions.RETRIEVE_ROLE, fetchCount);
}
