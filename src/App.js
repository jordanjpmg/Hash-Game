import React from "react";
import "./App.css";
import Header from "./components/Header";
import HashTag from "./components/HashTag";
import Label from "./objects/Label"

function App() {
  return (
    <main className="app">
      <Header />
      <HashTag />
      <Label content="Mostrar eventos"/>
    </main>
  );
}

export default App;
