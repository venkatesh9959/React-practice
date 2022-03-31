import React from "react";

interface Inputprops {
  labelName?: string;
  type?: "text" | "password" | "date" | "number" | "email";
  addclasses?: string;
  placeHolderText?: string;
  value?: string;
  onChageHandler?: any;
}
const InputText = (props: Inputprops) => {
  const { type, addclasses, placeHolderText, value, onChageHandler } = props;
  return (
    <input
      type={type}
      className={addclasses}
      placeholder={placeHolderText}
      value={value}
      onChange={onChageHandler}
    />
  );
};

export default InputText