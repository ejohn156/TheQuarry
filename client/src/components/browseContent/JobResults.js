import React, { Component } from "react";
import JobDB from "../../utils/DB/JobDB"
import "./Results.css"
import {Redirect} from "react-router-dom"
class JobResults extends Component {
    state = {
        applied: "",
        type: this.props.type,
        filter: this.props.filter,
        userID: "",
        jobs: [],
    }

    getUsersJob(){
            
            JobDB.getUsersJobs(sessionStorage.getItem("id")).then(
                res => this.setState({jobs: res.data.jobs}))
                //res => console.log(res.data.jobs))
        
    }

    getJobs(){
        if(this.state.filter === "All" && this.state.type === "browse"){
        JobDB.get()
        .then(res =>
        this.setState({jobs: res.data}))
        .catch(err => console.log(err));
    }
    else if(this.state.filter != "All" && this.state.type === "browse"){
        JobDB.getFiltered(this.state.filter).then(res => this.setState({jobs: res.data}))
        .catch(err => console.log(err))
    }
    }

    componentDidMount() {
        if(this.state.type === "browse")
        this.getJobs()
        else if(this.state.type === "profile")
        this.getUsersJob()
    }

    handleApplication(subject){
        if(sessionStorage.getItem("id") === null){
            this.setState({applied:"failed"})
        }else{
            sessionStorage.setItem("subject", subject) 
            this.setState({applied: "success"})
        }
    }
    handleDelete(subject){
        JobDB.delete(subject).then(this.getUsersJob())
        }
    

    render(){
        
        if(this.state.applied === "success"){
            return(
            <Redirect to="/apply"/>
            )
        }
        else if(this.state.applied === "failed"){
            return(
                <Redirect to="/login"/>
            )
        }

        return(
            
        <div>
            
        {this.state.jobs.map(job => {
            if(job.creatorID === sessionStorage.getItem("id") & this.state.type === "browse"){
                return(<div></div>)
            }
            else{
            return(
            <div class="card">
            <div class="card-header"><h2 class="title">{job.title}</h2></div>
            <div class="card-body">
            <div class="row">
               
                <div class="col-md-3"><h4 class="creator">{job.creator}</h4></div>
                <div class="col-md-3 category"><h4 class="cat">{job.category}</h4></div>
                <div class="col-md-4 desc"><p class="desc">{job.description}</p></div>
                <div class="col-md-1 price"><p class="est">Est: ${job.estimate}</p></div>
                <div class="col-md-1 apply"><button onClick={(subject) => this.state.type === "browse" ? this.handleApplication(job._id) : this.handleDelete(job._id)}>{this.state.type === "browse" ? "Apply" : "Delete"}</button></div>
            </div>
            </div>
            </div>
        )}})}
            </div>
        )}
}
export default JobResults;