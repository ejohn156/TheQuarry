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
<div className = "col-md-1"></div>
<div className = "signincard">
<div className="card">

<div className="card-body">
<form>
    <div id="Login">Login</div>
    <div className="form-group">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
    </div>
  <div className="form-group">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-check">
    <div id="RememberMe">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
    </div>
  </div>
  <div id="LoginButton">
  <form action="/home">
  <button type="submit" className="btn btn-primary">Login</button>
  </form>
  </div>
  
  <div id="SignUpText">
  <div className="signup">
  <small id="nologin" className="form-text text-muted">Don't have a login? Signup here.</small>
  <a className="nav-link" href="/sign-up">Sign-up</a>
  </div>
  </div>
  
</form>
</div>
</div>
</div>
</div>):(<h1>Sign In Form Goes Here</h1>)

        );
    }
}