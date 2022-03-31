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
      type={type || "button"} //Ikkada condtion rayala
      value={value}
      onClick={onClickHandler}
      disabled={disable}
      className={addclass}
    >
      {ButtonText}
    </button>
  );
};
export default Button;
