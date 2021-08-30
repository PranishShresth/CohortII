const initialState = {
  jokes: null,
  loading: false,
  error: null,
};

const JOKES_FETCH_REQUESTED = "JOKES_FETCH_REQUESTED";
const JOKES_FETCH_SUCCESS = "JOKES_FETCH_SUCCESS";
const JOKES_FETCH_FAILED = "JOKES_FETCH_FAILED";
export function JokesReducer(state = initialState, action) {
  switch (action.type) {
    case JOKES_FETCH_REQUESTED:
      return { ...state, loading: true };
    case JOKES_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        jokes: action.payload,
      };
    case JOKES_FETCH_FAILED:
      return {
        loading: false,
        jokes: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
