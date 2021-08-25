import React from "react";

export default function Cell(props) {
  const { cellIdx, handleClick, cellValue } = props;

  return (
    <div className="cell" onClick={() => handleClick(cellIdx)}>
      {cellValue}
    </div>
  );
}
