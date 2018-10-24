import React from "react";
import "./post.css";
import Navbar from '../../components/Navbar'

const postPage = ({ match }) => (

  <div>
    <Navbar page="post"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <h1>Post a Job/Service page</h1>
    </div>
    {/* this is weird */}
    </div>
    </div>


);

export default postPage;