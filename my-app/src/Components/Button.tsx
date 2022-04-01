interface ButtonProps {
  type?: "submit" | "reset" | "button";
  value?: string;
  ButtonText?: string;
  onClickHandler?: () => void;
  disable?: boolean;
  addclass?: string;
}
/**
 * 
 * @interface typeScript checking all values, and  the props definitions for Button Component
 * @type propertie used for Button Type
 * @addclasses propertie is used for  Button ClassName
 * @value propertie is used for  Button value
 * @onClickHandler properties is Button onClick  excute any function
 * @disable properties is used Button disable 
 * 
 * @
 */

const Button = (props: ButtonProps) => {
  const { type, value, ButtonText, onClickHandler, disable, addclass } = props;
  return (
    <button
      type={type || "button"}
      value={value}
      onClick={onClickHandler}
      disabled={disable}
      className={`btn ${addclass && addclass}`}
    >
      {ButtonText}
    </button>
  );
};
export default Button;

/**
 *  Button  Component Is Used  for Button Fields
 *  It used as Cancel  Button or Submit button or Reset button
 * 
 */
