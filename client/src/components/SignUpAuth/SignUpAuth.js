import React, { Component } from "react";
import "./SignUpAuth.css";
import DB from "../../utils/DB/ProfileDB";
import { Link } from "react-router-dom";

export default class authContent extends Component {
    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        unccID: "",
        password: "",
        confPassword: "",
        authType: this.props.type
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
    handleFirstChange = event => {
        this.setState({
            firstName: event.target.value,
        })
    }
    handleLastChange = event => {
        this.setState({
            lastName: event.target.value,
        })
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value,
        })
    }
    handleUnccChange = event => {
        this.setState({
            unccID: event.target.value,
        })
    }
    handleCpChange = event => {
        this.setState({
            confPassword: event.target.value,
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const newUser = this.state
        DB.save(newUser).then(this.setState({
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            unccID: "",
            password: "",
            authType: this.props.type
        }))
    };
    render() {
        return (
            this.state.authType === "signup" ? (

                <div>
                    <div className="col-md-1"></div>
                    <div className="signincard">
                        <div className="card">

                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div id="RegisterTitle">Sign Up</div>
                                    <div className="form-group">
                                        <input type="text" pattern=".{0,24}" required title="Enter your first name." className="form-control" id="exampleInputFirstName1" aria-describedby="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" pattern=".{0,24}" required title="Enter your last name." requiredtitle="Enter your last name." className="form-control" id="exampleLastName1" aria-describedby="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" pattern=".{4,24}" required title="Username must be at least 4 characters." id="exampleInputUsername1" placeholder="Username" value={this.state.username} onChange={this.handleUserChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" pattern=".{0,24}" required title="Enter your email." className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" pattern=".{9,9}" required title="Enter a valid UNC Charlotte ID" className="form-control" id="exampleunccIDNumber1" placeholder="UNCC ID Number" value={this.state.unccID} onChange={this.handleUnccChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" pattern=".{8,24}" required title="Password must be at least 8 characters long." className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" pattern=".{8,24}" required title="Passwords must match." className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password" value={this.state.confPassword} onChange={this.handleCpChange}></input>
                                    </div>
                                    <div id="RegisterButton">
                                        <button type="submit" name="register-sumbit" tabIndex="4" className="btn btn-primary">Sign Up</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>) : (<h1>Sign In Form Goes Here</h1>)

        );
    }
}