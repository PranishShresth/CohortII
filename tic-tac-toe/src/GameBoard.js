import React, { useState } from "react";
import Cell from "./Cell";

const initialBoard = Array(9).fill(null);
export default function GameBoard() {
  const [board, setBoard] = useState(initialBoard);

  const handleClick = (idx) => {
    console.log(idx);
  };
  return (
    <div className="gameContainer">
      <div className="boardContainer">
        {board.map((cellValue, cellIdx) => {
          return (
            <Cell
              key={cellIdx}
              cellValue={cellValue}
              cellIdx={cellIdx}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}
//🍩🍰