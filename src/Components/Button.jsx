import React from "react";

function Button(Props){
    return(
        <button type={Props.type} className="btn btn-primary btn-block mb-3 button-custom">
            {Props.toDisplay}
        </button>
    );
}

export default Button;