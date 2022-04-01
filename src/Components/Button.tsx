/**
 * @interface typeScript checking all values, and  the props definitions for Button Component
 * @prop {string} type- propertie used for Button Type
 * @prop {string} addclasses- propertie used for Button ClassName
 * @prop {string} value-propertie used for Button value
 * @prop {function} onClickHandler-properties for Button onClick  excute any function
 * @prop {boolean}disable -properties used for Button ClassName
 */
/**
 *  Button  Component Is Used  for Button Fields
 *  It used as Cancel  Button or Submit button or Reset button
 *
 */
interface ButtonProps {
  type?: "submit" | "reset" | "button";
  value?: string;
  ButtonText?: string;
  onClickHandler?: () => void;
  disable?: boolean;
  addclass?: string;
}

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
