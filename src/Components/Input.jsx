import React from "react";

function Input(Props){
    return(
              <div className="form-field d-flex align-items-center"> 
                <span className="fas fa-key"></span> 
                <input type={Props.type} className="form-control" id={Props.id} placeholder={Props.placeholder}/>
              </div> 
    );
}

export default Input;