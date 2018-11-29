import React, { Component } from "react";
import "./profile.css";
import ProfileDB from "../../utils/DB/ProfileDB";

export default class editProfileForm extends Component {
    state = {
        profileType: this.props.type,
        user: {},
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        major: "",
        about: "",
        workExperience: ""
    }
    componentDidMount() {
        var id = sessionStorage.getItem("id")
        ProfileDB.getById(id).then(res =>{
            this.setState({user: res.data })
            this.setState({username: this.state.user.username})
            this.setState({firstName: this.state.user.firstName})
            this.setState({lastName: this.state.user.lastName})
            this.setState({email: this.state.user.email})
            this.setState({major: this.state.user.major})
            this.setState({work_experience: this.state.user.work_experience})
            this.setState({about_me: this.state.user.about_me})
        })
    }

    handleUserChange = event => {
        this.setState({
            username: event.target.value,
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
    handleMajorChange = event => {
        this.setState({
            major: event.target.value,
        })
    }
    handleAboutChange = event => {
        this.setState({
            about_me: event.target.value,
        })
    }
    handleWorkChange = event => {
        this.setState({
            work_experience: event.target.value,
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        var updatedUser = this.state.user
        updatedUser.username = this.state.username
        updatedUser.firstName = this.state.firstName
        updatedUser.lastName = this.state.lastName
        updatedUser.major = this.state.major
        updatedUser.email = this.state.email
        updatedUser.about_me = this.state.about_me
        updatedUser.work_experience = this.state.work_experience
        ProfileDB.update(updatedUser).then(window.location.replace("/profile"))
    };
    render() {
        return (
            <div>
            <div class="row">
            <div class="col-md-11">
            <div class="card">
            <form onSubmit={this.handleFormSubmit}>
                <div class="row">
                <div class="col-md-12">
                <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label for="FirstName">First Name</label>
                    <textarea type="text" class="form-control" id="First Name" rows="1" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstChange}></textarea>
                </div>
                <div class="form-group">
                    <label for="LastName">Last Name</label>
                    <textarea type="text" class="form-control" id="Last Name" rows="1" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastChange}></textarea>
                </div>
                <div class="form-group">
                    <label for="Email">Email</label>
                    <textarea type="text" class="form-control" id="Email" rows="1" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}></textarea>
                </div>

                <div class="form-group">
                    <label for="Email">Username</label>
                    <textarea type="text" class="form-control" id="Username" rows="1" placeholder="Email" value={this.state.username} onChange={this.handleUserChange}></textarea>
                </div>
                </div>
                <div class="col-md-6">
                 <div class="form-group">
                     <label for="PhoneNumber">Major</label>
                     <textarea type="text" class="form-control" id="major" rows="1" value={this.state.major} onChange={this.handleMajorChange}></textarea>
                 </div>
                <div class="form-group">
                    <label for="About">About</label>
                    <textarea type="text" class="form-control" id="About" rows="4" value={this.state.about_me} onChange={this.handleAboutChange}></textarea>
                </div>
                <div class="form-group">
                    <label for="About">Work Experience</label>
                    <textarea type="text" class="form-control" id="workExperience" rows="4" value={this.state.work_experience} onChange={this.handleWorkChange}></textarea>
                </div>
                </div>
                </div>
                <div id="SubmitButton">
                    <center><button type="submit" name="register-sumbit" tabIndex="4" className="btn btn-primary">Update Profile</button></center>
                </div>
                <br></br>
            
            </div>
            </div>
            </form>
            </div>
            </div>
            </div>
            </div>
        )
    }
}