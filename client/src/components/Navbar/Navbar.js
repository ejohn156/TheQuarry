import React, { Component } from "react";
import "./Navbar.css"; /* import Navbar.css*/

export default class Navbar extends Component {
    //html goes here to design and create navbar
    state = {
      activePage: this.props.page,
    }
    render(){
      return(
    <div className="row">
    <div className="col-md-12"> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
    <a className="navbar-brand" href="/">The Quarry</a> 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className={this.state.activePage === "home" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className={this.state.activePage === "browseJob" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/browse/job">Browse Jobs</a>
        </li>
        <li className={this.state.activePage === "browseService" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/browse/service">Browse Services</a>
        </li>
        <li className={this.state.activePage === "profile" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/profile">Profile</a>
        </li>
        <li className={this.state.activePage === "instructions" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/instruction">Instructions</a>
        </li>
        <li className={this.state.activePage === "login" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className={this.state.activePage === "sign-up" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/sign-up">Sign Up</a>
        </li>
        <li className={this.state.activePage === "postJob" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/post/Job">Post a Job</a>
        </li>
        <li className={this.state.activePage === "postService" ? "nav-item active":"nav-item"}>
          <a className="nav-link" href="/post/Service">Post a Service</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  </div>
);
}
}
