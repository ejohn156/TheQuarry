import React from "react";
import "./browse.css";
import Navbar from '../../components/Navbar';
import BrowseContent from '../../components/browseContent'

const browsePage = () => (


  <div>
    <Navbar page="browseJob"/>
    <div class="row contentArea">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <BrowseContent content="Jobs" filter="All" type="browse"/>
    </div>
    </div>
    </div>
);

export default browsePage;