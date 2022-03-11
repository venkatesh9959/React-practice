import React from "react";

const Button=(properties)=>{
    const{type, buttonText, addClass, onClickHandler}=properties

    return(
        <div className="btn">
            <button type={type} 
            className={addClass}
            onClick={onClickHandler}> {buttonText}</button>
            

            </div>
    )

}
export default Button