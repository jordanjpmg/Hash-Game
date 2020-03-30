import React from "react";
import Label from "../Label";
import Input from "../Input";

const CheckBox = ({ id, type, value, content }) => {
  return (
    <>
      <Input id={id} type={type} value={value}></Input>
      <Label htmlFor="show" content={content} />
    </>
  );
};

export default CheckBox;
