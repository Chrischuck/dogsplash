const initialState = {
  imageColOne: [],
  imageColTwo: [],
  imageColThree: [],
  isLoading: false,
  error: null
}

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case 'dogsplash/fetch/PENDING':
      return { ...state, isLoading: true }
    case 'dogsplash/fetch/SUCCESS':
      return {
        ...state,
        isLoading: false,
        imageColOne: [ ...state.imageColOne, ...action.payload.data.imageColOne],
        imageColTwo: [ ...state.imageColTwo, ...action.payload.data.imageColTwo],
        imageColThree: [ ...state.imageColThree, ...action.payload.data.imageColThree]
      }
    case 'dogsplash/fetch/FAILURE':
      return { ...state, isLoading: false, error: action.payload.error}
    default:
      return state;
  }
}