import React from "react";
import Logo from "../../objects/Logo";
import Sobre from "../../objects/Sobre";
import "./styles.css";

const Header = () => {
  return (
    <header className="Container-header">
      <Logo />
      <Sobre />
    </header>
  );
};

export default Header;
