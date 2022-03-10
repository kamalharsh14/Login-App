import React from "react";

function Input(Props){
    return(
              <div className="form-outline mb-4 input-custom">
                <input type={Props.type} id={Props.id} placeholder={Props.placeholder} className="form-control" />
              </div>
    );
}

export default Input;