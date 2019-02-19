
import { all } from 'redux-saga/effects'

import dogSagas from './actions/dogs'

const combinedSagas = [
  ...dogSagas
]

export default function* rootSaga() {
  yield all(combinedSagas.map(saga => saga()))
}
