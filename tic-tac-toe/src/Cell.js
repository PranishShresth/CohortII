import React from "react";

export default function Cell(props) {
  const { cellIdx, handleClick, cellValue } = props;

  const handleCellClick = () => {
    handleClick(cellIdx);
    console.log("hey");
  };
  return (
    <div className="cell" onClick={handleCellClick}>
      {cellIdx} - {cellValue}
    </div>
  );
}
