import React, { Component } from "react";
import "./auth.css";


export default class authContent extends Component{
    state = {
        authType : this.props.type
    }
    render(){
        return(
            this.state.authType === "login" ? (
<div>
<div class = "col-md-1"></div>
<div class = "signincard">
<div class="card">

<div class="card-body">
<form>
    <h1>Login</h1>
    <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
    </div>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <h3>
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
    </h3>
  </div>
  <h3>
  <form action="/home">
  <button type="submit" class="btn btn-primary">Login</button>
  </form>
  </h3>
  
  <h3>
  <div class="signup">
  <small id="nologin" class="form-text text-muted">Don't have a login? Signup here.</small>
  <a class="nav-link" href="/sign-up">Sign-up</a>
  </div>
  </h3>
  
</form>
</div>
</div>
</div>
</div>):(<h1>Sign In Form Goes Here</h1>)

        );
    }
}