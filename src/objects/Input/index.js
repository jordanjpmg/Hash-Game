import React from "react";
import Label from "../Label";

const Input = ({ value, id, type, content }) => {
  return (
    <>
      <input id={id} type={type} value={value}></input>
      <Label htmlFor="show" content={content} />
    </>
  );
};

export default Input;
