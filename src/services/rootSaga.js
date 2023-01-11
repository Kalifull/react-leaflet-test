import { all } from 'redux-saga/effects';

import routerSaga from './routerService';
import requestSaga from './requestService';

export default function* rootSaga() {
  yield all([routerSaga(), requestSaga()]);
}
