

/**
 * @interface typeScript checking all values, and  the props definitions for Button Component
 * @prop {string} options - propertie used for drop down and list data shown
 * @prop {string} customSelectClassNames - propertie  used for  select box ClassName
 * @prop {string} PlaceHolderText - propertie used for  select filed placeHolder
 * @prop {string} value  - properrtie used for  select filed value
 * @prop {function} onChagehandler- properties used  for select onchage function
 * @prop {string} hasIconLeft properties used for display icon 
 * @prop {string} staricon properties used helighted select filed
 * @prop {string} value properties used assign value of select filed like default value
 *
 * @
 */

interface Option {
  value?: string;
  label?: string;
  Id?: number;
}


interface InputSelectProps {
  options: Option[];
  placeholderText?: string;
  customSelectClassNames?: string;
  labelName?: string;
  iconName?: string;
  hasIconLeft?: boolean;
  staricon?: string;
  value?: string;
  onChangeHandler?: (e: any) => void;
  name?: string;
}
/**
 *  InputSelect Component Is Used  for the InputSelect fields
 *  It like country dropdown and user catagory fields used resuble fields
 *
 */
const InputSelect = (props: InputSelectProps) => {
  const {
    options,
    placeholderText,
    customSelectClassNames,
    labelName,
    iconName,
    hasIconLeft,
    staricon,
    value,
    onChangeHandler,
    name,
  } = props;
  return (
    <div className="fprm-group">
      {labelName && (
        <label>
          {labelName}
          {staricon}
        </label>
      )}
      <fieldset
        className={`form-group position-relative  ${
          hasIconLeft && "has-icon-left"
        }`}
      >
        <select
          className={`form-control ${
            customSelectClassNames && customSelectClassNames
          }`}
          onChange={onChangeHandler}
          name={name}
          value={value}
        >
          {placeholderText && <option>{placeholderText}</option>}
          {options &&
            options.length > 0 &&
            options.map((option: Option, index: number) => (
              <option
                key={`${option.value}-option-${index}-${option.label}`}
                value={option.Id}
              >
                {option.label && `${option.label}`}
              </option>
            ))}
        </select>
        {iconName && (
          <div className="form-control-position">
            <i className={iconName}></i>
          </div>
        )}
      </fieldset>
    </div>
  );
};
export default InputSelect