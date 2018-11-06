import React from "react";
import "./profile.css";
import Navbar from '../../components/Navbar'
import ProfileForm from '../../components/ProfileForm'

const profilePage = ({ match }) => (

  <div>
    <Navbar page="profile"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-11">

    <ProfileForm type="Page"/>



    </div>
    </div>
    </div>


);

export default profilePage;