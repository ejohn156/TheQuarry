import React from "react";
import "./profile.css";
import Navbar from '../../components/Navbar'

const profilePage = ({ match }) => (

  <div>
    <Navbar page="profile"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <h1>Profile page</h1>
    </div>
    </div>
    </div>


);

export default profilePage;