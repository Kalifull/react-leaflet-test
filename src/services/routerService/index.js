import { call, put, takeLatest } from 'redux-saga/effects';

import routerApi from '../../api/routerApi';
import { routerActions } from '../../store/reducers/router/routerSlice';

function* fetchRoute(action) {
  try {
    const response = yield call(routerApi.getRoute, action.payload);
    yield put(routerActions.fetchRouteSuccess(response));
  } catch (error) {
    yield put(routerActions.fetchRouteFailed(error));
  }
}

export default function* routerSaga() {
  yield takeLatest(routerActions.fetchRoute.type, fetchRoute);
}
