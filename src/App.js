import React from "react";
import "./App.css";
import CheckBox from "./objects/CheckBox";
import About from "./objects/About";
import AboutLink from "./objects/AboutLink";
import IconClose from "./objects/IconClose";

import Header from "./components/Header";
import HashTag from "./components/HashTag";

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
      <About>
        <AboutLink className="-light" />
        <IconClose />
      </About>
    </main>
  );
}

export default App;
