import { combineReducers } from 'redux';

import dogs from './reducers/dogs'

export default function createReducer(asyncReducers) {
  return combineReducers({
    dogs,
    ...asyncReducers
  });
}