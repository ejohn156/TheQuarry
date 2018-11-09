import React, { Component } from "react";
import "./SignUpAuth.css";
import DB from "../../utils/DB/ProfileDB";


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
            // password: event.target.password,
            // firstName: event.target.firstName,
            // lastName: event.target.lastName,
            // email: event.target.email,
            // unccID: event.target.unccID,
            // password: event.target.password,
            // confPassword: event.target.confPassword,
        })
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
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            unccID: this.state.unccID,
            password: this.state.password,
        }
        DB.save(newUser).then(this.setState({
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            unccID: "",
            password: "",
            confPassword: "",
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
                                    <div id="RegisterTitle">Register</div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputFirstName1" aria-describedby="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleLastName1" aria-describedby="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username" value={this.state.username} onChange={this.handleUserChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleunccIDNumber1" placeholder="UNCC ID Number" value={this.state.unccID} onChange={this.handleUnccChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password" value={this.state.confPassword} onChange={this.handleCpChange}></input>
                                        </div>
                                    <br></br>
                                    <div id="RegisterButton">
                                        
                                            <button type="submit" name="register-sumbit" tabIndex="4" className="btn btn-primary">Register</button>
                                        
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>) : (<h1>Sign In Form Goes Here</h1>)

        );
    }
}