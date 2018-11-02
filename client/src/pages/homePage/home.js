import React from "react";
import "./home.css";
import Navbar from '../../components/Navbar'

const homePage = ({ match }) => (
<div>
    <Navbar page="home"/> {/* Navbar */}
    <div class="row">
        
        <div class="col-md-1">
            
        </div>
        <div class="col-md-11">
            <h1>Home Page</h1>

        </div>         
    </div>
</div>


);

export default homePage;