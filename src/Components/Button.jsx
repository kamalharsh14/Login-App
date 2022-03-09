import React from "react";

function Button(Props){
    return(
        <button type={Props.type} className="btn mt-3">
            {Props.toDisplay}
        </button>
    );
}

export default Button;