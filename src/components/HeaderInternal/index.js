import React from "react";
import LogoCollab from "../../objects/LogoCollab";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";

const HeaderInternal = () => {
  return (
    <>
      <LogoCollab light />
      <AboutLink className="-light" />
      <IconClose />
    </>
  );
};

export default HeaderInternal;
