import React, {Component} from "react";
import "./apply.css";
import Navbar from '../../components/Navbar'
import JobDB from '../../utils/DB/JobDB'
import ProfileDB from '../../utils/DB/ProfileDB'
import ApplicationDB from '../../utils/DB/ApplicationDB'
import {Redirect} from 'react-router-dom'
export default class applyPage extends Component  {
    state = {
        comment: "",
        job: {},
        applicant: {},
        delivered: false
    }
    getJob(){
        var subject = sessionStorage.getItem("subject")
        JobDB.getById(subject).then(res => this.setState({job: res.data}))
    }
    getApplicant(){
        var id = sessionStorage.getItem("id")
        ProfileDB.getById(id).then(res => this.setState({applicant: res.data}))
    }
    componentDidMount(){
        this.getJob()
        this.getApplicant()
    }
    handleCommentChange = event => {
        this.setState({comment: event.target.value})
       }
    handleSubmit = event =>{
           event.preventDefault()
           sessionStorage.removeItem("subject")
           alert("Application Submitted")
           var newApplication = {
               jobCreator: this.state.job.creator,
               jobCategory: this.state.job.category,
               jobTitle: this.state.job.title,
               jobEstimate: this.state.job.estimate,
               applicantID: this.state.applicant._id,
               recipientID: this.state.job.creatorID,
               comment: this.state.comment
           }
           ApplicationDB.create(newApplication).then(this.setState({delivered: true}))

       }
render(){
    if(this.state.delivered === true){
        return(
            <div>
                <Redirect to="/"/>
            </div>
        )
    }
    return(
<div>
    <Navbar page="post"/>
    <div>
    <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-10">
        <div class="card postjobcard">
        <div class="card-head">
        <h2>Application For {this.state.job.title}</h2>
        </div>
        <div class="card-body">
        <h3>Applicant: {this.state.applicant.username}</h3>
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
              <label htmlFor="comment" id="Jobdescription">Application Comment</label>
              <textarea type="text" class="form-control" id="Job Description" rows="4" placeholder="Leave a comment to explain why you are a good fit for the job!" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
            </div>
            <button type="submit">Send Application</button>
        </form>
        </div>
    </div>
</div>
</div>
</div>
</div>
    )}}

