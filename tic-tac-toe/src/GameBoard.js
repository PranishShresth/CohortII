import React, { useState } from "react";
import Cell from "./Cell";

const initialBoard = Array(9).fill(null);

function checkWinner(board) {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let position of winningPositions) {
    const [pos1, pos2, pos3] = position;
    if (board[pos1]) {
      if (board[pos1] === board[pos2] && board[pos1] === board[pos3]) {
        return board[pos1];
      }
    }
  }
  return null;
}
export default function GameBoard() {
  const [board, setBoard] = useState(initialBoard);
  const [player1Turn, setPlayer1Turn] = useState(true);

  const handleClick = (idx) => {
    const currentBoard = board.slice();
    if (currentBoard[idx] || checkWinner(currentBoard)) {
      return;
    }
    new Audio("https://www.w3schools.com/html/horse.ogg").play();
    currentBoard[idx] = player1Turn ? "🍩" : "🍰";
    setPlayer1Turn(!player1Turn);
    setBoard(currentBoard);
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
      {/* Winner : {checkWinner(board)} */}
    </div>
  );
}
//🍩🍰
