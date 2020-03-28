import React from "react";
import "./styles.css";

const Board = ({children}) => {
  return(
    <article className="board">
      {children} 
    </article>);
};

export default Board;
