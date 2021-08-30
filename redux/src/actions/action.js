export function fetchMyJokes() {
  return async (dispatch) => {
    try {
      dispatch({ type: "JOKES_FETCH_REQUESTED" });
      const resp = await fetch(
        "https://official-joke-api.appspot.com/random_ten"
      );
      const data = await resp.json();
      dispatch({ type: "JOKES_FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "JOKES_FETCH_FAILED", payload: "Fetch jokes failed" });
    }
  };
}
