import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Jokes() {
  const jokes = useSelector((state) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyJokes() {
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
    }
    fetchMyJokes();
  }, []);
  return <div>This is where joke lies </div>;
}
