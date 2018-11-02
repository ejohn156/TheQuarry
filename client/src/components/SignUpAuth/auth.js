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
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <form action="/home">
  <button type="submit" class="btn btn-primary">Login</button>
  </form>
  
  <div class="signup">
  <small id="nologin" class="form-text text-muted">Don't have a login? Signup here.</small>
  <a class="nav-link" href="/sign-up">Sign-up</a>
  </div>
</form>
</div>
</div>
</div>
</div>):(<h1>Sign In Form Goes Here</h1>)

        );
    }
}