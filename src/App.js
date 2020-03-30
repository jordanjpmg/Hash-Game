import React from "react";
import "./App.css";
import Header from "./components/Header";
import HashTag from "./components/HashTag";
import CheckBox from "./objects/CheckBox";
import About from "./objects/About";

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
      <About />
    </main>
  );
}

export default App;
