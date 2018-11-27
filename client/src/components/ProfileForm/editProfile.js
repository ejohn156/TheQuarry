import React, { Component } from "react";
import "./profile.css";
import ProfileDB from "../../utils/DB/ProfileDB";

export default class editProfileForm extends Component {
    state = {
        profileType: this.props.type,
        user: {}
    }
    componentDidMount() {
        var id = sessionStorage.getItem("id")
        ProfileDB.getById(id).then(res => this.setState({ user: res.data }))
    }
    render() {
        return (
            <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            <div class="card">
            <form>

                <div class="form-group">
                    <label for="FirstName">First Name</label>
                    <textarea type="text" class="form-control" id="First Name" rows="1" placeholder="First Name" ></textarea>
                </div>
                <div class="form-group">
                    <label for="LastName">Last Name</label>
                    <textarea type="text" class="form-control" id="Last Name" rows="1" placeholder="Last Name"></textarea>
                </div>

                <div class="form-group">
                    <label for="Address">Address</label>
                    <textarea type="text" class="form-control" id="Address" rows="3" placeholder="Address"></textarea>
                </div>
                <div class="form-group">
                    <label for="Email">Email</label>
                    <textarea type="text" class="form-control" id="Email" rows="1" placeholder="Email"></textarea>
                </div>

                <div class="form-group">
                    <label for="PhoneNumber">Phone Number</label>
                    <textarea type="text" class="form-control" id="Phone Number" rows="1" placeholder="Phone Number"></textarea>
                </div>
                <div class="form-group">
                    <label for="About">About</label>
                    <textarea type="text" class="form-control" id="About" rows="4" placeholder="About"></textarea>
                </div>

                <div id="SubmitButton">
                    <center><button type="submit" name="register-sumbit" tabIndex="4" className="btn btn-primary">Submit</button></center>
                </div>
                <br></br>


            </form>
            </div>
            </div>
            </div>
        )
    }
}