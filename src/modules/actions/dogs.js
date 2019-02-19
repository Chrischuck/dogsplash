import { call, put, takeEvery } from 'redux-saga/effects'

export const fetchData = () => ({ type: 'dogsplash/fetch/FETCH_DATA' })
export const fetchDogsPending = () => ({ type: 'dogsplash/fetch/PENDING', payload: { isLoading: true } })
export const fetchDogsSuccess = (data) => ({ type: 'dogsplash/fetch/SUCCESS', payload: { isLoading: false, data } })
export const fetchDogsFailure = (data) => ({ type: 'dogsplash/fetch/FAILURE', payload: { isLoading: false, error: data } })

export const fetchDogs = function*() {
  try {
    yield put(fetchDogsPending())

    const response = yield call(fetch, 'https://dog.ceo/api/breeds/image/random/12')
    const payload = yield response.json()

    yield put(fetchDogsSuccess(payload.message))
  } catch(err) {
    yield put(fetchDogsFailure(err))
  }
}

export function* watchFetchDogs() {
  yield takeEvery('dogsplash/fetch/FETCH_DATA', fetchDogs)
}

export default [ watchFetchDogs ]