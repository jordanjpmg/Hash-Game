import React from "react";
import "./App.css";
import Header from "./components/Header";
import HashTag from "./components/HashTag";
import Label from "./objects/Label";
import Input from "./objects/Input";

function App() {
  return (
    <main className="app">
      <Header />
      <HashTag />
      <Input />
      <Label content="Mostrar eventos" />
    </main>
  );
}

export default App;
