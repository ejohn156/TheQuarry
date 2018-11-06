import React from "react";
import "./auth.css";
import Navbar from '../../components/Navbar';
import Auth from '../../components/SignUpAuth';

const signUpPage = ({ match }) => (
    <div>
    <Navbar page="sign-up"/>
    <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8">
    <Auth type="signup"/>
    </div>
    </div>
    </div>
);

export default signUpPage;