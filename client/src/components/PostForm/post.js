import React, { Component } from "react";
import "./post.css";
import ServiceDB from "../../utils/DB/ServiceDB"
import JobDB from "../../utils/DB/JobDB";
import ProfileDB from "../../utils/DB/ProfileDB";


export default class PostForm extends Component {
  state = {
    postType: this.props.type,
    name: "",
    description: "",
    money: "",
    category: "Technology",
    user: {}
  }

  componentDidMount(){
    var id = sessionStorage.getItem("id")
    ProfileDB.getById(id).then(res => this.setState({user: res.data}))
  }
  handleNameChange = event => { 
    this.setState({name: event.target.value})
  }
  handleDescriptionChange = event => {
    this.setState({description: event.target.value})
   }
  handleCategoryChange = event => {
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
      category:this.state.category,
      creator: this.state.user.username,
      creatorID: sessionStorage.getItem("id")
    }

    JobDB.create(newJob).then(window.location.replace("/browse/job/" + this.state.category))
  }
  submitService = event => {
    event.preventDefault()
    
    var newService = {
      title: this.state.name,
      description: this.state.description,
      hourly: this.state.money,
      category:this.state.category,
      creator: this.state.user.username,
      creatorID: sessionStorage.getItem("id")
    }

    ServiceDB.create(newService).then(window.location.replace("/browse/service/"+this.state.category))
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
              </select>
            </div>
            <div class="form-group">
              <label htmlFor="PriceofJob">{this.state.postType === "Job" ? "Price ($)" : "Hourly Rate ($)"}</label>
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