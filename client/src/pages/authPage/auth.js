import React from "react";
import "./auth.css";
import Navbar from '../../components/Navbar';

const authPage = ({ match }) => (
    <div>
    <Navbar page="authentication"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <h1>Login/Signup page</h1>
    </div>
    </div>
    </div>
);

export default authPage;