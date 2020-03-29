import React from "react";
import Label from "../Label";

const Input = ({ value, id, content }) => {
  return (
    <>
      <input id={id} type="checkbox" value={value}></input>
      <Label htmlFor="show" content={content} />
    </>
  );
};

export default Input;
