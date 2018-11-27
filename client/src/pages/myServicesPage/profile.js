import React from "react";
import "./profile.css";
import Navbar from '../../components/Navbar'
import BrowseContent from '../../components/browseContent'

const myServicesPage = ({ match }) => (

  <div>
    <Navbar page="profile"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <BrowseContent content="Services" filter="All" type="profile"/>



    </div>
    </div>
    </div>


);

export default myServicesPage;