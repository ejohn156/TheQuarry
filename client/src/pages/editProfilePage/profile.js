import React from "react";
import "./profile.css";
import Navbar from '../../components/Navbar'
import EditProfile from '../../components/ProfileForm/editProfile'

const editProfilePage = ({ match }) => (

  <div>
    <Navbar page="profile"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <EditProfile type="Page"/>



    </div>
    </div>
    </div>


);

export default editProfilePage;