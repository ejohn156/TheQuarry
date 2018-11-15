import React, { Component } from "react";
import JobDB from "../../utils/DB/JobDB"


class JobResults extends Component {
    state = {
        
        jobs: []
    }

    getJobs(){
        JobDB.get()
        .then(res =>
        this.setState({jobs: res.data}))
        .catch(err => console.log(err));
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
        {this.state.jobs.map(job => {return(<li>{job.title}</li>)})}
        </div>
        )}
}
export default JobResults;