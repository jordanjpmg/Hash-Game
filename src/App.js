import React from "react";
import "./App.css";
import Header from "./components/Header";
import HashTag from "./components/HashTag";
import CheckBox from "./objects/CheckBox";

function App() {
  return (
    <main className="app">
      <Header />
      <HashTag />
      <CheckBox
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />
    </main>
  );
}

export default App;
