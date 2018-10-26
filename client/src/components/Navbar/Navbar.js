import React, { Component } from "react";
import "./Navbar.css"; /* import Navbar.css*/

export default class Navbar extends Component {
    //html goes here to design and create navbar
    state = {
      activePage: this.props.page
    }
    render(){
      return(
    <div class="row">
    <div class="col-md-12"> 
    <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
    <a class="navbar-brand" href="/">The Quarry</a> 
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class={this.state.activePage === "home" ? "nav-item active":"nav-item"}>
          <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class={this.state.activePage === "browseJob" ? "nav-item active":"nav-item"}>
          <a class="nav-link" href="/browse/job">Browse Jobs</a>
        </li>
        <li class={this.state.activePage === "browseService" ? "nav-item active":"nav-item"}>
          <a class="nav-link" href="/browse/service">Browse Services</a>
        </li>
        <li class={this.state.activePage === "profile" ? "nav-item active":"nav-item"}>
          <a class="nav-link" href="/profile">Profile</a>
        </li>
        <li class={this.state.activePage === "instructions" ? "nav-item active":"nav-item"}>
          <a class="nav-link" href="/instruction">Instructions</a>
        </li>
        <li class={this.state.activePage === "authentication" ? "nav-item active":"nav-item"}>
          <a class="nav-link" href="/authentication">Login/Sign-up</a>
        </li>
        <li class={this.state.activePage === "post" ? "nav-item active":"nav-item"}>
          <a class="nav-link" href="/post">Post a Job/Service</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  </div>
);
}
}
