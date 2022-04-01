import React from "react";

interface Inputprops {
  //@interface typeScript checking all values, and  the props definitions for Button Component
  labelName?: string;
  type?: "text" | "password" | "date" | "number" | "email";
  addclasses?: string;
  placeHolderText?: string;
  value?: string;
  onChageHandler?: any;
}
/**
 *
 * @prop {string} type - propertie used for Input filed Type
 * @prop {string} addclasses - propertie  used for  Input filed ClassName
 * @prop {string} PlaceHolderText - propertie used for  Input filed placeHolder
 * @prop {string} value  - properrtie used for  Input filed value
 * @prop {function} onChagehandler- properties for Input onchage function
 *
 * @
 */
const InputText = (props: Inputprops) => {
  const { type, addclasses, placeHolderText, value, onChageHandler } = props;
  return (
    <input
      type={type}
      className={`btn ${addclasses && addclasses}`}
      placeholder={placeHolderText}
      value={value}
      onChange={onChageHandler}
    />
  );
};

export default InputText;

/**
 *  InputText  Component Is Used  for the input fields
 *  It like password and gmail and text and number fields used resuble fields
 *
 */
