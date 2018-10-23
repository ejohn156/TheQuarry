import React from "react";
import "./browse.css";
import Sidebar from "../../components/SideBar";
import Navbar from '../../components/Navbar';
import BrowseContent from '../../components/browseContent'

const browsePage = () => (


  <div>
    <Navbar page="browseJob"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-3">
    <Sidebar />
    </div>
    <BrowseContent content="Jobs"/>
    </div>
    </div>
);

export default browsePage;