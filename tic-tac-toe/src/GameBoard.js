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
  const [history, setHistory] = useState([initialBoard]);
  const [step, setStep] = useState(0);

  const handleClick = (idx) => {
    const newHistory = history.slice(0, step + 1);
    const currentBoard = newHistory[newHistory.length - 1].slice();
    if (currentBoard[idx] || checkWinner(currentBoard)) {
      return;
    }

    // if(player1Turn){
    //     new Audio("https://www.w3schools.com/html/horse.ogg").play();
    // }else{
    //     new Audio("https://www.w3schools.com/html/horse.ogg").play();
    // }
    // //
    currentBoard[idx] = player1Turn ? "🍩" : "🍰";
    newHistory.push(currentBoard);

    setPlayer1Turn(!player1Turn);
    setBoard(currentBoard);
    setHistory(newHistory);
    setStep(newHistory.length);
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
      <div>{/* <pre>{JSON.stringify(history, null, 2)}</pre> */}</div>
      {/* Winner : {checkWinner(board)} */}

      <div>
        {history.map((currboard, boardIdx) => {
          return (
            <div key={boardIdx}>
              <button
                onClick={() => {
                  setStep(boardIdx);
                  setBoard(currboard);
                }}
              >
                Go to step {boardIdx}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//🍩🍰
