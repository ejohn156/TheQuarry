import React from "react";
import "./apply.css";
import Navbar from '../../components/Navbar'
import PostForm from '../../components/PostForm'
const applyPage = ({ match }) => (

<div>
    <Navbar page="post"/>
    <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
    
    <PostForm type="Job"/>
    </div>
</div>
</div>
);

export default applyPage;