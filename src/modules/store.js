import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga'

import createReducer from './reducer';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(createReducer(), applyMiddleware(sagaMiddleware) );
  store.asyncReducers = {}

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)  
  
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}