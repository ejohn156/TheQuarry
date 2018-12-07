import React, { Component } from "react";
import "./Navbar.css"; /* import Navbar.css*/
import "./Navbar1.css";
import { Link } from "react-router-dom";
import ProfileDB from "../../utils/DB/ProfileDB";
export default class Navbar extends Component {
    //html goes here to design and create navbar
    state = {
      activePage: this.props.page,
      user: {}
    }

    componentDidMount(){
      var id = sessionStorage.getItem("id")
      ProfileDB.getById(id).then(res => this.setState({user: res.data}))
    }
    logout= event =>{
      sessionStorage.removeItem("id")
      window.location.replace("/")
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

        {this.state.user.username == undefined ? (<div className="collapse navbar-collapse" id="navbarNav">
        <li class={this.state.activePage === "instructions" ? "nav-item active":"nav-item"}>
          <Link className="nav-link" to="/instruction">FAQ</Link>
        </li>
        <li className={this.state.activePage === "login" ? "nav-item active":"nav-item"}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>

        <li className={this.state.activePage === "sign-up" ? "nav-item active":"nav-item"}>
          <Link className="nav-link" to="/sign-up">Sign Up</Link>
        </li> 
        </div>):(<div className="collapse navbar-collapse" id="navbarNav">

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
        <li class={this.state.activePage === "instructions" ? "nav-item active":"nav-item"}>
          <Link className="nav-link" to="/instruction">FAQ</Link>
        </li>
          {/* <li className={this.state.activePage === "profile" ? "nav-item active":"nav-item"}>
          <Link className="nav-link" to="/profile">{this.state.user.username}</Link> */}
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.state.user.username}
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/profile">View Profile</Link>
            <Link className="dropdown-item" to="/profile/edit">Edit Profile</Link>
            <Link className="dropdown-item" to="/profile/Jobs">View Jobs</Link>
            <Link className="dropdown-item" to="/profile/Services">View Services</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Mailbox
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/mailbox/received/applications">Received Applications</Link>
            <Link className="dropdown-item" to="/mailbox/received/requests">Received Requests</Link>
            <Link className="dropdown-item" to="/mailbox/sent/applications">Sent Applications</Link>
            <Link className="dropdown-item" to="/mailbox/sent/requests">Sent Requests</Link>
          </div>
        </li>
        
        <li className="logout" value={this.state.user.username} onClick={this.logout}>
          <Link className="nav-link" to="/">Logout</Link>
        </li> 
        </div>)
        }
      </ul>
    </div>
  </nav>
  </div>
  </div>
);
}
}
