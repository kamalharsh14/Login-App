import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";

function Login(){
    return(
      <div className="wrapper">
          <Logo />
          <div className="text-center mt-4 name"> Login </div>
          <form className="p-3 mt-3">
              <Input 
              type="password" 
              id="userName" 
              placeholder="Username" 
              />
              <Input 
              type="password" 
              id="password" 
              placeholder="Password" 
              />
              <Button
              type = "Button"
              toDisplay = "Login"
              />
          </form>
          <div className="text-center fs-6">
            <a href="#">Forgot password?</a> or <a href="#">Sign up</a> 
          </div>
      </div>
    );
}

export default Login;