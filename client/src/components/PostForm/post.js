import React, { Component } from "react";
import "./post.css";
import jobDB from "../../utils/DB/JobDB";
import serviceDB from "../../utils/DB/ServiceDB";

export default class PostForm extends Component {
    state = {
      title: "Test",
      Description: "Test Descr",
      Owner: "First Last",
      Category: "Art",
      Estimate: "20",
      postType: this.props.type
    }
    handleInput = event => {
      this.setState({
        
      })
    }
    handleFormSubmit = event => {
      event.preventDefault();
      const newPost = {
        title: this.state.title,
        Description: this.state.Description,
        Owner: this.state.Owner,
        Category: this.state.Category,
        Estimate: this.state.Estimate,
      }
      this.state.postType === "Job" ? 
        jobDB.save(newPost)//.then(this.setState({
/*            title: "",
          Description: "",
          Owner: "",
          Category: "",
          Estimate: "" 
        } */
      :
        serviceDB.save(newPost)//.then(this.setState({
          /* title: "",
          Description: "",
          Owner: "",
          Category: "",
          Estimate: "" 
        }
        */
      
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
  <div>
   
    <div class = "col-md-1"></div>
    <div class = "postjobcard">
    <div class="card">  
    <h1>Post a {this.state.postType}</h1>

<div class="card-body">
    </div>
      <div class="form-group">
        <label for="JobName">Name</label>
        <textarea type ="text" class="form-control" id="Job Name" rows="1"  placeholder={this.state.postType === "Job" ? "Job Name":"Service Name" } ></textarea>
      </div>
      <div class="form-group">
        <label for="Jobdescription">Description</label>
        <textarea type="text" class="form-control" id="Job Description" rows="4" placeholder={this.state.postType === "Job" ? "Job Description":"Service Description"} ></textarea> 
      </div>

      <form class="form-inline" onSubmit={this.handleFormSubmit}>
  <label class="mr-sm-2" for="inlineFormCustomSelect">Category</label>
  <select class="custom-select" id="inlineFormCustomSelect" >
    <option selected>Choose...</option>
    <option value="1">Technology</option>
    <option value="2">Art</option>
    <option value="3">Mechanical</option>
    <option value="4">Academic</option>
  </select>
  </form>
  <div class="Price">
  <div class="form-group">
        <label for="PriceofJob" id="PriceofJob">{this.state.postType === "Job" ? "Price Range":"Hourly Rate"}</label>
        <textarea type ="text" class="form-control" id="Price" rows="1" placeholder="Price $"></textarea>
      </div>
  </div>

<div class="submitjob">
  <form action="/profile">
  <button type="submit" class="button">Post {this.state.postType}</button>
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