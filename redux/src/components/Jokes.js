import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyJokes } from "../actions/action";

export default function Jokes() {
  const { jokes, loading } = useSelector((state) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyJokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      {jokes &&
        jokes.map((joke) => {
          return (
            <div
              key={joke.id}
              style={{ background: "#F7F7F7", margin: 20, padding: 40 }}
            >
              <h2>{joke.setup}</h2>
              <h3>{joke.punchline}</h3>
            </div>
          );
        })}
    </div>
  );
}
