
/**
 * @interface typeScript checking all values, and  the props definitions for Button Component
 * @prop {string} type - propertie used for Input filed Type
 * @prop {string} addclasses - propertie  used for  Input filed ClassName
 * @prop {string} PlaceHolderText - propertie used for  Input filed placeHolder
 * @prop {string} value  - propertie used for  Input filed value
 * @prop {function} onChagehandler- properties for Input onchage function
 * @prop {boolean} hasIconLeft -properties used for icon displayin leftSide input filed
 * @prop {staricon} -properies used for height the starmark 
 */

interface Inputprops {
  labelName?: string;
  type?: "text" | "password" | "date" | "number" | "email";
  hasIconLeft?: boolean;
  addclasses?: string;
  iconName?:string;
  placeHolderText?: string;
  staricon?:string;
  value?: string;
  onChageHandler?: (e:any)=>void;
}
/**
 *  InputText  Component Is Used  for the input fields
 *  It like password and gmail and text and number fields used resuble fields
 *
 */

const InputText = (props: Inputprops) => {
  const { type,labelName, addclasses, placeHolderText,hasIconLeft, value, onChageHandler,staricon,iconName } = props;
  return (
    <div className="form-group">
            {labelName && (
                <label>
                    {labelName}
                    {staricon}
                </label>
            )}
            <div
                className={`position-relative ${
                    hasIconLeft && "has-icon-left"
                }`}
            >
    <input
      type={type || "text"}
      className={`form-control ${addclasses && addclasses}`}
      placeholder={placeHolderText}
      value={value}
      onChange={onChageHandler}
    />
        {iconName && (
                    <div className="form-control-position">
                        <i className={iconName}></i>
                    </div>
                )}
            </div>
        </div>
  );
};

export default InputText;
