import createSagaMiddleware from 'redux-saga';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import rootSaga from '../services/rootSaga';

import routerReducer from './reducers/router/routerSlice';
import requestReducer from './reducers/request/requestSlice';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  routerInfo: routerReducer,
  requestInfo: requestReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
