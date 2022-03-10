import React from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Logo from "./Logo";
import fields from "./logInInputs";

function Login(){
    return(
      <form className="container mt-4 form-custom">
        <Logo />
        {fields.map(data => <Input type = {data.type} placeholder = {data.placeholder} key = {data.id}/>)}
        <Checkbox />
        <Button
        type = "submit"
        toDisplay = "Log in"
        />
        
        <div class="col mb-2 mt-">
          <a href="#!">Forgot password?</a>
        </div>
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
        </div>
      </form>
    );
}

export default Login;