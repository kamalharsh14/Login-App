import React from "react";
import favicon from "./favicon.png"

function Logo(){
    return(
        <div className="logo"> 
            <img src={favicon} alt="" /> 
          </div>
    );
}

export default Logo;