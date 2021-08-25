import React, { useState } from "react";
import Cell from "./Cell";

const initialBoard = Array(9).fill(null);
export default function GameBoard() {
  const [board, setBoard] = useState(initialBoard);
  return <div>{board.map((cellValue, cellIdx) => {})}</div>;
}
