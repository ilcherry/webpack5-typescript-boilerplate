import { put, takeEvery } from '@redux-saga/core/effects';
import { Actions } from 'actions/page1Action';

import request from 'utils/request';

export function* fetchRoles(): Generator {
  try {
    const { roles } = yield request({
      url: '/api/roles',
    });

    yield put({
      type: Actions.FETCH_ROLE,
      payload: { roles },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}

export function* watchFetchRoles(): Generator {
  yield takeEvery(Actions.RETRIEVE_ROLE, fetchRoles);
}
