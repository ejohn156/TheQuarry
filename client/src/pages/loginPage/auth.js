import React from "react";
import "./auth.css";
import Navbar from '../../components/Navbar';
import Auth from '../../components/Auth';

const loginPage = ({ match }) => (
    <div>
    <Navbar page="login"/>
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
    <Auth type="login"/>
    </div>
    </div>
    </div>
);

export default loginPage;