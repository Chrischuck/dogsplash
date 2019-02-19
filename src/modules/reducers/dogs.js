const initialState = {
  dogs: [],
  isLoading: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'dogsplash/fetch/PENDING':
      return state
    default:
      return state;
  }
}