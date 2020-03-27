import React from "react";
import "./styles.css"
import playerX from "../../images/player-x.svg";
import playerO from "../../images/player-o.svg";

const Player = ({player})=>{

  const players = [];
  players["x"] = playerX;
  players["o"] = playerO
  
  console.log(player)
  return(
    <button className= "player">
      <img src={players[player]} alt={`Player ${player.toUpperCase()}`}/>
    </button>)
}

export default Player