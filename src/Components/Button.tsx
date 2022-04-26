import React from "react"
/**
 * @interface typeScript checking all values, and  the props definitions for Button Component
 * @prop {string} type- propertie used for Button Type
 * @prop {string} addclasses- propertie used for Button ClassName
 * @prop {string} value-propertie used for Button value
 * @prop {function} onClickHandler-properties for Button onClick  excute any function
 * @prop {boolean}disable -properties used for Button ClassName
 */

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  value?: string;
  buttonText?: string;
  onClickHandler?: ()=>void;
  disable?: boolean;
  addClass?: string;
}

/**
 *  Button  Component Is Used  for Button Fields
 *  It used as Cancel  Button or Submit button or Reset button
 *
 */
const Button = (props: ButtonProps) => {
  const { type, value, buttonText, onClickHandler, disable, addClass } = props;
  return (
    <button
      type={type || "button"}
      value={value}
      onClick={onClickHandler}
      disabled={disable}
      className={`btn ${addClass && addClass}`}
    >
      {buttonText}
    </button>
  );
};
export default Button;
