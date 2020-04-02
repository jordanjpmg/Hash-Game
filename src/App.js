import React from "react";
import "./App.css";

import Profile from "./images/profile.jpeg";

import CheckBox from "./objects/CheckBox";
import About from "./objects/About";
import AvatarProfile from "./objects/AvatarProfile";

import Header from "./components/Header";
import HashTag from "./components/HashTag";
import HeaderInternal from "./components/HeaderInternal";

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
        <HeaderInternal />
        <AvatarProfile src={Profile} />
      </About>
    </main>
  );
}

export default App;
