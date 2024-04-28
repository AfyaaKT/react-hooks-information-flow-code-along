import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor , setChildColor] = useState('#fff')

  function handleChangeColor(childColor){
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
    setChildColor(childColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} color = {childColor} />
      <Child onChangeColor={handleChangeColor} color ={childColor}/>
    </div>
  );
}

export default Parent;
