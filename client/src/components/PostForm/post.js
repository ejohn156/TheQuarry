import React, { Component } from "react";
import "./post.css";
import ServiceDB from "../../utils/DB/ServiceDB"
import JobDB from "../../utils/DB/JobDB";


export default class PostForm extends Component {
  state = {
    postType: this.props.type,
    name: "",
    description: "",
    money: "",
    category: "Technology"
  }
  handleNameChange = event => { 
    this.setState({name: event.target.value})
  }
  handleDescriptionChange = event => {
    this.setState({description: event.target.value})
   }
  handleCategoryChange = event => {
    alert(event.target.value)
    this.setState({category: event.target.value})
   }
  handleMoneyChange = event => {
    this.setState({money: event.target.value})
   }
  submitJob = event => {
    event.preventDefault()
    
    var newJob = {
      title: this.state.name,
      description: this.state.description,
      estimate: this.state.money,
      category:this.state.category
    }

    JobDB.create(newJob).then(alert("Job Created"))
  }
  submitService = event => {
    event.preventDefault()
    
    var newService = {
      title: this.state.name,
      description: this.state.description,
      hourly: this.state.money,
      category:this.state.category
    }

    ServiceDB.create(newService).then(alert("Job Created"))
  }


  render() {
    return (
      <div class="card postjobcard">
        <div class="card-header"><h1 class="postHeader">Post a {this.state.postType}</h1></div>
        <div class="card-body">
          <form onSubmit={this.state.postType === "Job" ? this.submitJob:this.submitService}>
            <div class="form-group">
              <label htmlFor="JobName">Name</label>
              <textarea type="text" class="form-control" id="Job Name" rows="1" placeholder={this.state.postType === "Job" ? "Job Name" : "Service Name"} value={this.state.name} onChange={this.handleNameChange}></textarea>
            </div>
            <div class="form-group">
              <label htmlFor="Jobdescription">Description</label>
              <textarea type="text" class="form-control" id="Job Description" rows="4" placeholder={this.state.postType === "Job" ? "Job Description" : "Service Description"} value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
            </div>
            <div class="form-group">
              <label htmlFor="inlineFormCustomSelect">Category</label>
              <select class="form-control" id="inlineFormCustomSelect" onChange={this.handleCategoryChange}>
                <option value="Technology" >Technology</option>
                <option value="Art">Art</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Academic">Academic</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label htmlFor="PriceofJob">{this.state.postType === "Job" ? "Price Range ($)" : "Hourly Rate ($)"}</label>
              <textarea type="text" class="form-control" id="Price" rows="1" placeholder="" value={this.state.money} onChange={this.handleMoneyChange}></textarea>
            </div>
            <br></br>
            <div class="form-group">
            <center><input type="submit" class="button"></input></center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}