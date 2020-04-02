import React from "react";
import "./styles.css";
import Board from "../../objects/Board";
import Player from "../../objects/Player";

const HashTag = () => {
  return (
    <>
      <Board>
        <ul className="hashTag">
          <li className="item">
            <Player player="x" />
          </li>
          <li className="item">
            <Player player="x" />
          </li>
          <li className="item">
            <Player player="x" />
          </li>

          <li className="item">
            <Player player="x" />
          </li>
          <li className="item">
            <Player player="o" />
          </li>
          <li className="item">
            <Player player="x" />
          </li>

          <li className="item">
            <Player player="o" />
          </li>
          <li className="item">
            <Player player="x" />
          </li>
          <li className="item">
            <Player player="o" />
          </li>
        </ul>
      </Board>
    </>
  );
};

export default HashTag;
