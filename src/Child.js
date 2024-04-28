import React from "react";
import { getRandomColor  } from "./randomColorGenerator.js";

function Child({ onChangeColor , color }) {
  const newChildColor = getRandomColor()
  return <div className="child" style={{ backgroundColor: color }} onClick={() =>onChangeColor(newChildColor)} />;
}

export default Child;
