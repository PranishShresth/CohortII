import React from "react";

export default function Cell(props) {
  const { cellIdx, handleClick } = props;

  const handleCellClick = () => {
    handleClick(cellIdx);
    console.log("hey");
  };
  return (
    <div className="cell" onClick={handleCellClick}>
      {cellIdx}
    </div>
  );
}
