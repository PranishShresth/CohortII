import React, { useContext, useEffect } from "react";
import { GameContext } from "./GameContext";
export default function Consumer1() {
  const [param22222, state] = useContext(GameContext);

  //   componentDidMount and componentDidUpdate and componentWillUnmount
  useEffect(() => {
    param22222();

    return () => {
      // component will unmount
      //   clean up
    };
    //eslint-disable-next-line
  }, [param22222]);
  return <div>Consumer 1 {JSON.stringify(state)}</div>;
}
