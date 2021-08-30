import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyJokes } from "../actions/action";

export default function Jokes() {
  const jokes = useSelector((state) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyJokes());
  }, []);
  return <div>J</div>;
}
