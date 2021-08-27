import React, { useContext } from "react";
import { GameContext } from "./GameContext";
import Consumer1 from "./Consumer1";
export default function Consumer() {
  return (
    <div>
      <Consumer1></Consumer1>
      {/* <Consumer1></Consumer1> */}
    </div>
  );
}
