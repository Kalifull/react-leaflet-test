import { call, put, takeLatest } from 'redux-saga/effects';

import requestApi from '../../api/requestApi';
import { requestActions } from '../../store/reducers/request/requestSlice';

function* fetchRequest() {
  try {
    const response = yield call(requestApi.getData);
    yield put(requestActions.fetchRequestSuccess(response));
  } catch (error) {
    yield put(requestActions.fetchRequestFailed(error));
  }
}

export default function* requestSaga() {
  yield takeLatest(requestActions.fetchRequest.type, fetchRequest);
}
