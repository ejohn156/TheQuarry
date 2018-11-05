import React, { Component } from "react";
import "./profile.css";

export default class ProfileForm extends Component {
    state = {
        profileType: this.props.type
    }
    render() {
        return (
            <form>
                <div>

                    <div class="col-md-1"></div>
                    <div class="profilepagecard">
                        <div class="card">
                            <h1>Profile</h1>

                            <div class="card-body"></div>
                            <center>
                                <img src="{require('client/default_profile.png')}" alt="No Photo available"></img><br/>
                            <input type="file"/>
                            </center>

                            <div class="form-group">
                                <label for="FirstName">First Name</label>
                                <textarea type="text" class="form-control" id="First Name" rows="1" placeholder="First Name"></textarea>
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
                                <label for="Experience/Talents">Experience/Talents</label>
                                <div class="checkbox">
                                    <label><input type="checkbox" value="Art" /> Art </label><br />
                                    <label><input type="checkbox" value="Science" /> Science </label><br />
                                    <label><input type="checkbox" value="IT" /> IT </label><br />
                                    <label><input type="checkbox" value="BookKeeping" /> Book Keeping </label><br />
                                    <label><input type="checkbox" value="Mechanic" /> Mechanic </label><br />
                                    <label><input type="checkbox" value="Crafts" /> Crafts </label><br />

                                </div>
                            </div>


                            <div class="form-group">
                                <label for="About">About</label>
                                <textarea type="text" class="form-control" id="About" rows="4" placeholder="About"></textarea>
                            </div>

                            <div class="submitprofile">
    
                                    <center><button type="submit" class="button">Submit changes</button></center><br/>
                                
                            </div>


                        </div>
                    </div>
                </div>

            </form>

        )
    }
}