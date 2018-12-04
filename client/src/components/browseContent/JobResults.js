import React, { Component } from "react";
import JobDB from "../../utils/DB/JobDB"
import "./Results.css"

class JobResults extends Component {
    state = {
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
        if(sessionStorage.getItem("id") === undefined){

        }else{
            sessionStorage.setItem("subject", subject) 
            alert(sessionStorage.getItem("subject")) 
        }
    }

    render(){
        
        return(
            
        <div>
            
        {this.state.jobs.map(job => {return(
            <div class="card">
            <div class="card-header"><h2 class="title">{job.title}</h2></div>
            <div class="card-body">
            <div class="row">
                <div class="col-md-3"><h4>{job.creator}</h4></div>
                <div class="col-md-3 category"><h4>{job.category}</h4></div>
                <div class="col-md-4 desc"><p>{job.description}</p></div>
                <div class="col-md-1 price"><p>Estimate: ${job.estimate}</p></div>
                <div class="col-md-1 apply"><button onClick={(subject) => this.handleApplication(job._id)}>Apply</button></div>
            </div>
            </div>
            </div>

        )})}
            </div>
        )}
}
export default JobResults;