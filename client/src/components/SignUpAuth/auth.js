import React, { Component } from "react";
import "./auth.css";


export default class authContent extends Component{
    state = {
        authType : this.props.type
    }
    render(){
        return(
            this.state.authType === "signup" ? (
<div>
<div class = "col-md-1"></div>
<div class = "signincard">
<div class="card">

<div class="card-body">
<form>
   
    <div class="form-group"> 
        <h1>Register</h1>     
        <input type="text" class="form-control" id="exampleInputFirstName1" aria-describedby="firstName" placeholder="First Name"></input>
    </div>
    <div class="form-group">      
        <input type="text" class="form-control" id="exampleLastName1" aria-describedby="lastName" placeholder="Last Name"></input>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username"></input>
    </div>
    <div class="form-group">      
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"></input>
    </div>
    <div class="form-group">      
        <input type="text" class="form-control" id="exampleunccIDNumber1" placeholder="UNCC ID Number"></input>
    </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password"></input>
  </div>
    <h1>
  <form action="/login">
  <button type="submit" name= "register-sumbit" tabindex="4" class="btn btn-primary">Register</button>
  </form>
    </h1>
  
 
</form>
</div>
</div>
</div>
</div>):(<h1>Sign In Form Goes Here</h1>)

        );
    }
}