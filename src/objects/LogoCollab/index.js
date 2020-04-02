import React from "react";
import CollabCode from "../../images/logo.svg";
import CollabCodeLight from "../../images/logo-light.svg";

const LogoCollab = ({ light }) => {
  return (
    <img
      className="logo-collab"
      src={light ? CollabCodeLight : CollabCode}
      alt="Logo CollabCode"
    ></img>
  );
};

export default LogoCollab;
