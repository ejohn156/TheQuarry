import React from "react";
import "./auth.css";
import Navbar from '../../components/Navbar';
import Auth from '../../components/SignUpAuth';

const signUpPage = ({ match }) => (
    <div>
    <Navbar page="sign-up"/>
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
    <Auth type="signup"/>
    </div>
    </div>
    </div>
);

export default signUpPage;