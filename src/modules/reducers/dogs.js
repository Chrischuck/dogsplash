const initialState = {
  dogs: [],
  isLoading: false,
  error: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'dogsplash/fetch/PENDING':
      return { ...state, isLoading: true }
    case 'dogsplash/fetch/SUCCESS':
      return { ...state, isLoading: false, dogs: [...state.dogs, ...action.payload.data] }
    case 'dogsplash/fetch/FAILURE':
      return { ...state, isLoading: false, error: action.payload.error}
    default:
      return state;
  }
}