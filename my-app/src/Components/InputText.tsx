import React from "react";

interface Inputprops {
  labelName?: string;
  type?: "text" | "password" | "date" | "number" | "email";
  addclasses?: string;
  placeHolderText?: string;
  value?: string;
  onChageHandler?: any;
}
/**
 * 
 * @interface typeScript checking all values, and  the props definitions for Button Component
 * @type propertie used for Input filed Type
 * @addclasses propertie is used for  Input filed ClassName
 * @PlaceHolderText propertie is used for  Input filed placeHolder 
 * @value properrtie is used for  Input filed value
 * @onChagehandler properties is Input onchage function 
 * 
 * @
 */
const InputText = (props: Inputprops) => {
  const { type, addclasses, placeHolderText, value, onChageHandler } = props;
  return (
    <input
      type={type}
      className={`btn ${addclasses&&addclasses}`}
      placeholder={placeHolderText}
      value={value}
      onChange={onChageHandler}
    />
  );
};

export default InputText


/**
 *  InputText  Component Is Used  for the input fields 
 *  It like password and gmail and text and number fields used resuble fields
 * 
 */