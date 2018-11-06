import React from "react";
import "./browse.css";
import Navbar from '../../components/Navbar';
import BrowseContent from '../../components/browseContent'

const browsePage = ({ match }) => (
  <div>
    <Navbar page="browseService"/>
    <div class="row contentArea">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <BrowseContent content="Services"/>
    </div>
    </div>
    </div>
);

export default browsePage;