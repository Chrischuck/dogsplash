export const fetchDogsPending = () => ({ type: 'dogsplash/fetch/PENDING', payload: { isLoading: true } })
export const fetchDogsSuccess = (data) => ({ type: 'dogsplash/fetch/SUCCESS', payload: { isLoading: false, data } })
export const fetchDogsFailure = (data) => ({ type: 'dogsplash/fetch/FAILURE', payload: { isLoading: false, error: data } })
