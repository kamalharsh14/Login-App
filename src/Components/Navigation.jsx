import React from "react";
import favicon from "./favicon.png";

function Navigation(props){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid me-5">
                <a class="navbar-brand" href="#">
                    <img src={favicon} alt="" width="30" height="30" /> &nbsp; My Profile</a>
            </div>
        </nav>
    );
}

export default Navigation;