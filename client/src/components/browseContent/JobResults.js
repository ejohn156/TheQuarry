import React, { Component } from "react";
import JobDB from "../../utils/DB/JobDB"
import "./Results.css"

class JobResults extends Component {
    state = {
        filter: this.props.filter,
        jobs: []
    }

    getJobs(){
        if(this.state.filter === "All"){
        JobDB.get()
        .then(res =>
        this.setState({jobs: res.data}))
        .catch(err => console.log(err));
    }else{
        JobDB.getFiltered(this.state.filter).then(res => this.setState({jobs: res.data}))
        .catch(err => console.log(err))
    }
    }

    componentDidMount() {
        this.getJobs()
    }

    // componentDidUpdate() {
    //     this.getVenues();
    // }
    // deleteVenue = (id) => {
    //     alert(`Venue Deleted`)
    //     DB.delete(id).then(this.getVenues())
    //     this.getVenues()
        
    // }

    render(){
        return(
        <div>
        {this.state.jobs.map(job => {return(
            <div class="card">
            <div class="card-header"><h2 class="title">{job.title}</h2></div>
            <div class="card-body">
            <div class="row">
                <div class="col-md-4 category"><h5>{job.category}</h5></div>
                <div class="col-md-5 desc"><p>{job.description}</p></div>
                <div class="col-md-3 price"><p>Estimate: ${job.estimate}</p></div>
            </div>
            </div>
            </div>

        )})}
        </div>
        )}
}
export default JobResults;