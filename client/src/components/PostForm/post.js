import React, { Component } from "react";
import "./post.css";


export default class PostForm extends Component {
    state = {
        postType: this.props.type
    }
    render() {
        return (
            <form>
  <div>
   
    <div class = "col-md-1"></div>
    <div class = "postjobcard">
    <div class="card">  
    <h1>Post a Job</h1>

<div class="card-body">
    </div>
      <div class="form-group">
        <label for="JobName">Name of Job</label>
        <textarea type ="text" class="form-control" id="Job Name" rows="1" placeholder="Job Name"></textarea>
      </div>
      <div class="form-group">
        <label for="Jobdescription">Job Description</label>
        <textarea type="text" class="form-control" id="Job Description" rows="4" placeholder="Job Description"></textarea> 
      </div>

      <form class="form-inline">
  <label class="mr-sm-2" for="inlineFormCustomSelect">Category</label>
  <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
    <option selected>Choose...</option>
    <option value="1">Technology</option>
    <option value="2">Artist</option>
    <option value="3">Mechanical</option>
    <option value="4">Academic</option>
  </select>
  </form>
  <div class="Price">
  <div class="form-group">
        <label for="PriceofJob" id="PriceofJob">Price Range of Job</label>
        <textarea type ="text" class="form-control" id="Price" rows="1" placeholder="Price $"></textarea>
      </div>
  </div>

<div class="submitjob">
  <form action="/profile">
  <button type="submit" class="button">Post Job</button>
  </form>
  </div>

  <h2>
    <br>
    </br>
    <br>
    </br>
    <br></br>
    

  </h2>

  

      
      </div>
      </div>
      </div>
    </form>
        );
    }
}