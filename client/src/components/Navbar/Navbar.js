import React, { Component } from "react";
import "./Navbar.css"; /* import Navbar.css*/
import "./Navbar1.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    //html goes here to design and create navbar
    state = {
      activePage: this.props.page,
    }

    logout= event =>{
      sessionStorage.removeItem("username")
      window.location.replace("/login")
    }

    render(){
      return(
    <div className="row">
    <div className="col-md-12"> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
    <Link className="navbar-brand" to="/home">The Quarry</Link> 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        {/*Drop down - Browse*/}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Browse
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/browse/job">Jobs</Link>
            <Link className="dropdown-item" to="/browse/service">Services</Link>
          </div>
        </li>
        
        {/*Drop down - Post*/}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Post
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/post/Job">Jobs</Link>
            <Link className="dropdown-item" to="/post/Service">Services</Link>
          </div>
        </li>

        <li className={this.state.activePage === "profile" ? "nav-item active":"nav-item"}>
          <Link className="nav-link" to="/profile">{sessionStorage.getItem("username")}</Link>
        </li>


        <li class={this.state.activePage === "instructions" ? "nav-item active":"nav-item"}>
          <a class="nav-link" href="/instruction">FAQ</a>
        </li>


        <li className={this.state.activePage === "login" ? "nav-item active":"nav-item"}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>

        <li className={this.state.activePage === "sign-up" ? "nav-item active":"nav-item"}>
          <Link className="nav-link" to="/sign-up">Sign Up</Link>
        </li> 
        <li className="logout" value={sessionStorage.getItem("username")} onClick={this.logout}>
          <Link className="nav-link" to="/">Logout</Link>
        </li> 

      </ul>
    </div>
  </nav>
  </div>
  </div>
);
}
}
