import React, { Component } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import DB from "../../utils/DB/ProfileDB";



export default class authContent extends Component{
    state = {
        authType : this.props.type,
        username: "",
        password: "",
        redirect: false
    }
    handleUserChange = event => {
      this.setState({
          username: event.target.value,
      })
  }
  
  handlePasswordChange = event => {
      this.setState({
          password: event.target.value,
      })
  }
  handleFormSubmit = event => {
    event.preventDefault();
    const User = {
        username: this.state.username,
        password: this.state.password
    }
    DB.login(User.username, User.password)
    .then(res => {
        sessionStorage.setItem("username", res.data[0].username)
        window.location.replace("/")
        })
    
};

    render(){
        
        return(
            this.state.authType === "login" ? (
<div>
<div className = "col-md-1"></div>
<div className = "signincard">
<div className="card">

<div className="card-body">
<form onSubmit={this.handleFormSubmit}>
    <div id="Login">Login</div>
    <div className="form-group">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" value={this.state.username} onChange={this.handleUserChange}></input>
    </div>
  <div className="form-group">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
  </div>
  <div className="form-check">
    <div id="RememberMe">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
    </div>
  </div>

  <div id="LoginButton">
  
  <button type="submit" className="btn btn-primary">Login</button>
  
</div>

  <p></p>
  <div id="SignUpText">
<div id="forgotPassword">
  <Link id="nav-link" to="/sign-up">Forgot your username or password?</Link>
  </div>
  <p></p>
  <div id="SignUpText">
          Don't have an account? <Link id="sign-up-link" to="/sign-up">Sign Up</Link>
  </div> 
  </div>
</form>
</div>
</div>
</div>
<br></br>
<br></br>
<p></p>
</div>):(<h1>Sign In Form Goes Here</h1>)

        );
    }
}