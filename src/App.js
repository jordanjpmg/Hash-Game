import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Player from "./objects/Player";
function App() {
  return (
    <>
      <Header />
      <Board />
      <Player player="x"/>
    </>
  );
}

export default App;
