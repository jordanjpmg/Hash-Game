import React from "react";

const Input = ({ value = "", id = "", type = "text" }) => {
  return (
    <>
      <input id={id} type={type} value={value}></input>
    </>
  );
};

export default Input;
