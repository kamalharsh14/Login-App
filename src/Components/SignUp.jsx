import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import fields from "./signUpInputs";

function SignUp(){
    return(
        <form className="container mt-4 form-custom">
        <Logo />
        {fields.map(data => <Input type = {data.type} placeholder = {data.placeholder} key = {data.id}/>)}
        <Button
        type = "submit"
        toDisplay = "Sign up"
        />
        <div class="text-center">
          <p>Already a member? <a href="#!">Log in</a></p>
        </div>
      </form>
    );
}

export default SignUp;