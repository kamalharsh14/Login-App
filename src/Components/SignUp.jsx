import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";

function SignUp(){
    return(
      <div className="wrapper">
          <Logo />
          <div className="text-center mt-4 name"> Sign Up </div>
          <form className="p-3 mt-3">
              <Input 
              type="text" 
              id="Name" 
              placeholder="Name" 
              />
              <Input 
              type="email" 
              id="EmailId" 
              placeholder="Email Id" 
              />
              <Input 
              type="text" 
              id="Gender" 
              placeholder="Gender" 
              />
              <Input 
              type="number" 
              id="MobileNo" 
              placeholder="Mobile No" 
              />
              <Input 
              type="text" 
              id="City" 
              placeholder="City" 
              />
              <Button
              type = "Button"
              toDisplay = "Sign Up"
              />
          </form>
          <div className="text-center fs-6">
            <a href="#">Forgot password?</a> or <a href="#">Sign up</a> 
          </div>
      </div>
    );
}

export default SignUp;