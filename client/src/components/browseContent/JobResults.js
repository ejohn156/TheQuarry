import React, { Component } from "react";
import JobDB from "../../utils/DB/JobDB"
import "./Results.css"
import charlottelogo from "./images/charlotte logo2.jpeg";

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
            <html lang="en"> 
            <head class ="head1"> 
                <title class="title">{job.title}</title>
                <link href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi" 
                rel="stylesheet"></link>
            </head>
            <body class="body1">
            <div class="wrapper">
            <div class="normal-img">
            <img src={charlottelogo}
            height="420" width="327">
            </img>
            </div>
            <div class ="job-info">
            <div class ="job-text">
            <h1>{job.title}</h1>
            <h2>{job.category}</h2>
            <p>{job.description}</p>
            </div>
            <div class="job-price-btn">
            <p><span>{job.estimate}</span></p>
            <button type="button">See Now</button>
            </div>
            </div>
            </div>
            </body>
            

            
            </html>
            

        )})}
        </div>
        )}
}
export default JobResults;