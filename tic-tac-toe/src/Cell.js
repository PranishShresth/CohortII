import React from "react";

export default function Cell(props) {
  const { cellIdx } = props;
  return <div className="cell">{cellIdx}</div>;
}
